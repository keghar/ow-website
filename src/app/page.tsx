import { CallToAction } from '@/components/CallToAction'
import EventLarge from '@/components/EventLarge'

import { Hero } from '@/components/Hero'
import { Membership } from '@/components/Membership'

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <EventLarge />

        <CallToAction />

        <Membership />
      </main>
    </>
  )
}
