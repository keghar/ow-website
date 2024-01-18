import { Metadata } from 'next'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import ArchivedEvent from '@/components/ArchivedEvent'

export default async function Page() {
  const client = createClient()

  return (
    <section>
      <div>
        <ArchivedEvent />
      </div>
    </section>
  )
}
