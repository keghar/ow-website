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
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h2 className=" text-xl font-bold text-slate-700">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body max my-auto max-h-6 max-w-sm overflow-y-hidden overflow-ellipsis   break-words px-2 text-sm font-medium text-slate-700 md:text-base">
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
    limit: 100,
  })

  return (
    <Container>
      <h1 className=" mb-4 flex flex-col text-center text-2xl">
        <span className=" font-display bg-gradient-to-b from-slate-700 via-[#0e57afE6] to-slate-700 bg-clip-text text-center text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
          Event Archive
        </span>{' '}
      </h1>
      <p className="mb-8 text-center text-xl font-bold text-slate-600">
        Welcome to the concert archive. Click on event to be directed to the
        event page.
      </p>

      <ul className="grid-col-1 mb-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <li key={event.uid}>
            <Link href={`/archive/${event.uid}`}>
              <div className=" flex h-24 items-center justify-between rounded-xl border border-slate-300 bg-slate-200 p-4 shadow-lg shadow-gray-400">
                {/* <PrismicNextImage field={event.data.image} height={300} /> */}
                <div className="px-2 py-2">
                  <PrismicRichText
                    field={event.data.title}
                    components={components}
                  />
                  <PrismicRichText
                    field={event.data.description}
                    components={components}
                  />
                </div>
                <ChevronRight className="text-slate-600" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
