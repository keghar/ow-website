import { createClient } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { serialize } from '@prismicio/client/richtext'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicText,
  SliceZone,
} from '@prismicio/react'
import { Container } from './Container'

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="text-center text-lg font-bold">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body max-w-sm break-words text-center text-sm font-medium text-slate-600 md:text-base">
      {children}
    </p>
  ),
}

export default async function EventLarge() {
  const client = createClient()

  const events = await client.getAllByType('event', {
    filters: [prismic.filter.at('my.event.archive', true)],
    orderings: [
      {
        field: 'my.event.date',
        direction: 'desc',
      },
    ],
    limit: 6,
  })

  return (
    <Container>
      <h2 className="tex-center mb-10 flex flex-col text-center text-2xl font-bold">
        <span>Event Archive</span>{' '}
        <span className="text-center text-base font-normal">
          Check out our past events
        </span>
      </h2>

      <ul className=" mb-10 grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <li key={event.uid}>
            <div className=" flex items-center justify-center">
              {/* <PrismicNextImage field={event.data.image} height={300} /> */}
              <div className="mx-auto flex flex-col justify-center">
                <PrismicRichText
                  field={event.data.title}
                  components={components}
                />
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: event.data.video_iframe || ' ',
                  }}
                />

                <PrismicRichText
                  field={event.data.description}
                  components={components}
                />

                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-sm">Conductor: </span>
                  <PrismicRichText
                    field={event.data.conductor}
                    components={components}
                  />
                </div>

                <div className="my-2 flex justify-center">
                  <div className="rounded-xl border-2 border-black p-2">
                    <PrismicNextLink
                      field={event.data.program_link}
                      className=""
                    >
                      Program
                    </PrismicNextLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
