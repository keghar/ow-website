import { CallToAction } from '@/components/CallToAction'
import EventLarge from '@/components/EventLarge'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Membership } from '@/components/Membership'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
