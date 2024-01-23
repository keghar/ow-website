import { createClient } from '@/prismicio'
import * as prismic from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'
import { Button } from './Button'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="text-2xl text-slate-700 md:text-3xl lg:text-4xl xl:text-5xl ">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body max-w-prose text-justify text-base font-normal leading-tight text-slate-700 md:text-lg lg:text-xl xl:text-2xl ">
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
    limit: 2,
  })

  const date = prismic.asDate(events[0].data.date)

  return (
    <div className="px-4 pb-20 ">
      <div className="mb-10 mt-20">
        <h2 className="bg-gradient-to-b from-slate-800 via-[#0e57afE6] to-slate-800 bg-clip-text p-2 text-center font-display text-3xl tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
          Upcoming Events
        </h2>
      </div>
      {/* Events */}
      <ul className=" flex w-full flex-col items-center justify-center gap-y-16 xl:my-3">
        {events.map((event) => (
          <li key={event.uid} className="">
            <div className=" flex w-screen flex-col justify-center border border-slate-300 bg-slate-200 px-2 py-10 xl:px-10  2xl:px-20">
              <div className="mx-auto mb-3 flex flex-col justify-center md:mb-12">
                <PrismicRichText
                  field={event.data.title}
                  components={components}
                />
                <div className="mx-auto">
                  {date ? dateFormatter.format(date) : 'No date'}
                </div>
              </div>
              <div className="flex flex-col items-center gap-x-2 px-3 md:flex-row lg:mx-auto lg:max-w-screen-lg lg:px-10">
                <div className=" md:basis-1/2">
                  <PrismicNextImage
                    field={event.data.image}
                    height={650}
                    width={400}
                    imgixParams={{ fit: 'clip' }}
                  />
                </div>
                <div className="my-auto mt-6 flex flex-col md:mt-0 md:basis-1/2 lg:mx-auto lg:justify-center">
                  <div className="mb-4">
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
