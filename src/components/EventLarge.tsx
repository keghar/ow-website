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
import { Button } from './Button'
import Link from 'next/link'

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="text-2xl text-slate-600 md:text-3xl lg:text-4xl xl:text-5xl ">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mx-6 max-w-prose text-justify text-base font-medium tracking-tight text-slate-600 md:mx-0 md:mr-3 md:text-lg lg:text-xl xl:text-2xl ">
      {children}
    </p>
  ),
}

export default async function EventLarge() {
  const client = createClient()

  const events = await client.getAllByType('event', {
    filters: [prismic.filter.at('my.event.archive', false)],
    orderings: [
      {
        field: 'my.event.date',
        direction: 'asc',
      },
    ],
    limit: 3,
  })

  return (
    <div className=" mx-auto px-4 pb-20 md:px-10 xl:max-w-screen-2xl ">
      <div className="mt-20 lg:my-20">
        <h2 className=" bg-gradient-to-b from-slate-800 via-sky-600  to-slate-700 bg-clip-text py-6 text-center font-display text-3xl font-semibold text-transparent md:text-4xl xl:text-6xl">
          Upcoming Events
        </h2>
      </div>
      {/* Events */}
      <ul className=" mx-auto flex w-full flex-col items-center justify-center gap-y-16 xl:my-3">
        {events.map((event) => (
          <li key={event.uid} className="w-full">
            <div className=" flex h-full w-full flex-col justify-center rounded-xl border border-slate-300 bg-slate-200 pb-10 shadow-2xl shadow-slate-400 ">
              <div className="mx-auto my-6 flex flex-col justify-center">
                <PrismicRichText
                  field={event.data.title}
                  components={components}
                />
                <div className="mx-auto">
                  <PrismicRichText
                    field={event.data.date}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-body text-justify text-base   text-slate-600 md:mx-0 md:text-xl lg:text-2xl">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="gap flex flex-col items-center gap-x-3 md:flex-row lg:mx-auto lg:justify-center lg:px-4 xl:px-8">
                <div className=" px-3 md:ml-3 md:basis-1/2 lg:flex lg:justify-center">
                  <PrismicNextImage
                    field={event.data.image}
                    height={650}
                    width={400}
                    imgixParams={{ fit: 'clip' }}
                  />
                </div>
                <div className="flex flex-col md:basis-1/2 lg:mx-auto lg:justify-center">
                  <div className="mb-4 mt-6">
                    <PrismicRichText
                      field={event.data.description}
                      components={components}
                    />
                  </div>

                  <PrismicNextLink field={event.data.location_link}>
                    <div className="m-3 flex flex-col">
                      <span className=" mx-auto text-base font-extrabold tracking-wide text-slate-600 md:text-lg lg:text-xl xl:text-2xl ">
                        Address
                      </span>
                      <div className="">
                        <PrismicRichText
                          field={event.data.address}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="font-body max-w-prose text-center text-base font-medium text-slate-600 md:text-lg lg:text-xl xl:text-2xl ">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </PrismicNextLink>
                  <div className="m-3 flex flex-col  items-center justify-center text-slate-700">
                    <span className="font-extrabold tracking-wide md:text-lg lg:text-xl xl:text-2xl">
                      Conductor{' '}
                    </span>
                    <div className="mx-auto">
                      <PrismicRichText
                        field={event.data.conductor}
                        components={components}
                      />
                    </div>
                  </div>

                  <div className="mx-auto mt-4 flex gap-3 px-2 xl:gap-x-8 ">
                    <Button variant="solid" className="w-36">
                      <PrismicNextLink field={event.data.facebook_event}>
                        {' '}
                        Facebook Event
                      </PrismicNextLink>
                    </Button>
                    <Button className="w-36">
                      <PrismicNextLink field={event.data.program_link}>
                        Program
                      </PrismicNextLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
