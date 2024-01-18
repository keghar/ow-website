import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import fullBand from '@/images/full-band.jpeg'
import EventLarge from './EventLarge'

export function Hero() {
  return (
    <Container className="text-center md:my-16 lg:pt-32">
      {/* <span className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Oconee Winds
      </span> */}
      <h1 className="mx-auto max-w-2xl font-display text-[1.7rem] tracking-tight text-slate-700 md:mt-16 md:text-5xl lg:text-5xl xl:max-w-none xl:text-6xl">
        Community wind orchestra <br />
        Oconee, South Carolina
      </h1>
      <div className="mt-10 flex justify-center gap-x-6 md:mt-14">
        <Button className="w-40" href="/register">
          Concert Archive
        </Button>
        <Button className="w-40" href="/members" variant="outline">
          <span className="">Membership</span>
        </Button>
      </div>
      <div className="relative mt-10 h-56 md:mx-0 md:mt-16 md:h-96 lg:h-[500px]">
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
