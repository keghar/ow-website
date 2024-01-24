import { Metadata } from 'next'
import { JSXMapSerializer, PrismicRichText, SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { Container } from '@/components/Container'

const serializer: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="bg-gradient-to-b from-slate-700 via-[#0e57afE6] to-slate-700 bg-clip-text text-center font-display text-3xl tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
      {children}
    </h1>
  ),
}

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('about')

  return (
    <Container>
      <div className="mx-auto mb-20 mt-10">
        <PrismicRichText field={page.data.title} components={serializer} />
      </div>

      <SliceZone slices={page.data.slices} components={components} />
    </Container>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('about')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}
