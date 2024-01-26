import { CallToAction } from '@/components/CallToAction'
import Contact from '@/components/Contact'
import { Container } from '@/components/Container'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export default function Page() {
  return (
    <main>
      <Container>
        <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16">
          <h1 className="font-display bg-gradient-to-b from-slate-800 via-[#0e57afE6] to-slate-800 bg-clip-text text-center text-3xl font-semibold tracking-wide text-slate-700 text-transparent md:text-6xl lg:text-7xl">
            Membership
          </h1>
          <p className="mx-auto max-w-prose text-center text-xl font-medium text-slate-700 md:text-2xl lg:text-3xl">
            If you are interested in joining Oconee Winds. Please fill out the
            form below
          </p>
          <div>
            <Contact />
          </div>
        </div>
      </Container>
      <CallToAction />
    </main>
  )
}
