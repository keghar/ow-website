import { Metadata } from 'next'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import ArchivedEvent from '@/components/ArchivedEvent'
import { CallToAction } from '@/components/CallToAction'

export default async function Page() {
  const client = createClient()

  return (
    <main>
      <section>
        <ArchivedEvent />
      </section>

      <CallToAction />
    </main>
  )
}
