import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Membership() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-16 sm:py-32"
    >
      <Container>
        <div className="flex flex-col justify-center md:text-center">
          <h2 className="mx-auto font-display text-3xl tracking-tight text-white sm:text-4xl">
            {/* <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" /> */}
            Membership
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            While we have full instrumentation, we are just getting started and
            do have semi-open membership at this time. If you are a musician in
            the area and want to join contact us below.
          </p>
          <div className="mx-auto pt-4">
            <Button
              variant="outline"
              color="white"
              href="/membership"
              className="w-40"
            >
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
