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

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Oconee Winds
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Oconee Winds is an all-ages community wind orchestra in Oconee, South
        Carolina.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Upcomming Events</Button>
        <Button href="/members" variant="outline">
          <span className="ml-3">Members</span>
        </Button>
      </div>
      <div className="relative mt-10 flex justify-center ">
        <Image
          src={fullBand}
          alt="Photo of the full band"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className="mt-36 lg:mt-44">
        <p className="font-display text-xl font-bold text-slate-900">
          Upcomming Events
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Christmas Concert', logo: logoTransistor },
              { name: 'Spring Concert', logo: logoTuple },
              { name: 'Summer Camp', logo: logoStaticKit },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((concerts) => (
                  <li key={concerts.name} className="flex">
                    {/* <Image
                      src={concerts.name}
                      alt={concerts.name}
                      unoptimized
                    /> */}
                    <span>{concerts.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
