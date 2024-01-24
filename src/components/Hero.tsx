import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="mt-8 text-center md:my-16">
      {/* <span className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Oconee Winds
      </span> */}
      <h1 className="mx-auto max-w-2xl font-display text-[1.6rem] tracking-tight text-slate-700 sm:text-[1.7rem] md:mt-16 md:text-5xl lg:max-w-none lg:text-7xl">
        Community Wind Orchestra <br />
        Oconee, South Carolina
      </h1>
      <div className="mt-10 flex justify-center gap-x-6 md:mt-14">
        <Button className="w-40" href="/archive">
          Concert Archive
        </Button>
        <Button className="w-40" href="/membership" variant="outline">
          <span className="">Membership</span>
        </Button>
      </div>
      <div className="relative mt-10 flex h-56 justify-center md:mx-0 md:mt-16 md:h-96 lg:h-[500px]">
        <Image
          src="/oconeewinds-fullband.jpeg"
          alt="Photo of the full band"
          className=" object-cover"
          fill
          priority
        />
      </div>
    </Container>
  )
}
