import { Metadata } from 'next'
import { JSXMapSerializer, PrismicRichText, SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { Container } from '@/components/Container'
import { components } from '@/slices'

const serializer: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="bg-gradient-to-b from-slate-800 via-[#0e57afE6] to-slate-800 bg-clip-text text-center font-display text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-md text-base font-medium leading-10 tracking-tight text-slate-600 md:mb-8 md:text-2xl">
      {children}
    </p>
  ),
}

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('camp')

  return (
    <section>
      <Container className="flex flex-col justify-center">
        <div className="mx-auto mb-20 mt-10">
          <PrismicRichText
            field={page.data.page_title}
            components={serializer}
          />
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </Container>
    </section>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('camp')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
