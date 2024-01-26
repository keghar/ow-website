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
import { Button } from './Button'

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h2 className="text-center text-xl font-bold text-slate-600">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body my-auto max-h-14 max-w-sm overflow-scroll break-words px-2 text-center text-sm font-medium text-slate-600 md:text-base">
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
      <h1 className=" mb-14 flex flex-col text-center text-2xl">
        <span className=" bg-gradient-to-b from-slate-700 via-[#0e57afE6] to-slate-700 bg-clip-text text-center font-display text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
          Event Archive
        </span>{' '}
      </h1>

      <ul className=" mb-10 grid grid-cols-1 place-content-center gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {events.map((event) => (
          <li key={event.uid}>
            <div className=" flex items-center justify-center rounded-xl border border-slate-300 bg-slate-100 p-4 shadow-lg shadow-gray-400 xl:p-10">
              {/* <PrismicNextImage field={event.data.image} height={300} /> */}
              <div className="mx-auto flex flex-col justify-center gap-4">
                <PrismicRichText
                  field={event.data.title}
                  components={components}
                />
                <PrismicRichText
                  field={event.data.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="font-body my-auto h-14 max-h-14 max-w-sm overflow-scroll break-words px-2 text-center text-sm font-medium text-slate-600 md:text-base">
                        {children}
                      </p>
                    ),
                  }}
                />
                <div className="flex items-center justify-center gap-x-2">
                  <span className="font-body max-w-sm break-words text-center text-sm font-medium text-slate-600 md:text-base">
                    Conductor:{' '}
                  </span>
                  <PrismicRichText
                    field={event.data.conductor}
                    components={components}
                  />
                </div>

                <div
                  className="mx-auto"
                  dangerouslySetInnerHTML={{
                    __html: event.data.video_iframe || ' ',
                  }}
                />

                <div className="my-2 flex justify-center">
                  <Button className="w-36">
                    <PrismicNextLink
                      field={event.data.program_link}
                      className=""
                    >
                      Program
                    </PrismicNextLink>
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
