import { CallToAction } from '@/components/CallToAction'
import Contact from '@/components/Contact'
import { Container } from '@/components/Container'

import { Metadata } from 'next'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { Button } from '@/components/Button'
import { PrismicNextLink } from '@prismicio/next'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('membership')

  return (
    <main>
      <Container>
        <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16">
          <h1 className="font-display bg-gradient-to-b from-slate-800 via-[#0e57afE6] to-slate-800 bg-clip-text text-center text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
            {page.data.title}
          </h1>
          <p className="mx-auto max-w-prose text-center text-xl font-medium text-slate-700 md:text-2xl lg:text-3xl">
            {page.data.description}
          </p>
          <div>
            <div
              className=" mx-auto h-full overflow-visible"
              dangerouslySetInnerHTML={{
                __html: page.data.contact_form || ' No Form ',
              }}
            />
          </div>
        </div>

        <Button className="mx-auto my-10 w-36">
          {' '}
          <PrismicNextLink field={page.data.form_link}>
            {page.data.form_link_text}
          </PrismicNextLink>
        </Button>
      </Container>
      <SliceZone slices={page.data.slices} components={components} />
      <CallToAction />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('membership')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
