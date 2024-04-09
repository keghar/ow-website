import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JSXMapSerializer, PrismicRichText, SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { asText } from '@prismicio/client'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/Button'

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h1 className=" font-display bg-gradient-to-b from-slate-700 via-[#0e57afE6] to-slate-700 bg-clip-text py-3 text-center text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="font-body my-auto max-w-prose text-center text-lg font-medium text-slate-600 md:text-2xl">
      {children}
    </p>
  ),
}

type Params = { uid: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client
    .getByUID('event', params.uid)
    .catch(() => notFound())

  const event = await client.getByUID('event', params.uid)

  return (
    <main className="mx-auto flex max-w-screen-xl flex-col justify-center">
      <div className="flex w-40 flex-row-reverse gap-1">
        <Link
          href="/archive"
          className="text-medium font-medium text-slate-600 underline underline-offset-2"
        >
          Back to Archive
        </Link>
        <ChevronLeft className="text-slate-500" />
      </div>
      <Container className=" my-8 overflow-y-hidden">
        <div className=" my-4 flex flex-col justify-center">
          <PrismicRichText field={event.data.title} components={components} />
          <div className=" font-body mx-auto my-auto px-2 text-center text-lg  font-medium text-slate-600 md:text-2xl">
            {event.data.date
              ? dateFormatter.format(new Date(event.data.date))
              : 'Coming Soon'}
          </div>
          <div className="mx-auto my-6">
            <PrismicRichText
              field={event.data.description}
              components={components}
            />
          </div>
          <div className="items center flex justify-center ">
            <p className="font-body my-auto px-2 text-center text-lg font-medium text-slate-600 md:text-2xl">
              Conductor:
            </p>
            <PrismicRichText
              field={event.data.conductor}
              components={components}
            />
          </div>

          <Button className="mx-auto mt-4 w-40">
            <PrismicNextLink field={event.data.program_link}>
              Program
            </PrismicNextLink>
          </Button>
        </div>
        <div className="flex max-w-screen-2xl flex-col-reverse justify-center md:mx-auto lg:gap-4 xl:flex-row xl:gap-6 2xl:gap-8">
          <div className="">
            <PrismicNextImage
              field={event.data.image}
              height={500}
              className="mx-auto "
            />
          </div>

          <div
            className="my-auto md:mx-auto"
            dangerouslySetInnerHTML={{
              __html: event.data.video_iframe || ' Video Coming Soon ',
            }}
          />
        </div>

        <Link
          href="/archive"
          className="mx-auto mt-10 text-lg font-medium text-slate-700 underline underline-offset-2"
        >
          {' '}
          Back to Archive{' '}
        </Link>
      </Container>
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID('event', params.uid)
    .catch(() => notFound())

  const title = asText(page.data.title)
  const description = asText(page.data.description)

  return {
    title: title,
    description: description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('event')

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
