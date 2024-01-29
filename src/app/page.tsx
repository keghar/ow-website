import { CallToAction } from '@/components/CallToAction'
import EventLarge from '@/components/EventLarge'

import { Membership } from '@/components/Membership'
import { Metadata } from 'next'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle('homepage')

  return (
    <>
      <main>
        <SliceZone slices={page.data.slices} components={components} />

        <EventLarge />

        <CallToAction />

        <Membership />
      </main>
    </>
  )
}
