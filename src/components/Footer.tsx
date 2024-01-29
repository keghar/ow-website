import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import Logo from './Logo'
import { dancingScript } from '@/utils/fonts'
import { Button } from './Button'
import { DonateButton } from './DonateButton'
import { Suspense } from 'react'

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700">
      <Container>
        <div className="flex flex-col justify-center py-16">
          <div className="font-display mx-auto mb-10 flex max-w-prose flex-col justify-center border-b border-b-slate-400 py-6 text-slate-700 md:text-center">
            <h2 className="mx-auto mb-4 text-3xl tracking-tight">Donate</h2>
            <p>
              Oconee Winds needs your support to enhance the arts in our
              community! We appreciate any donation you can make. Oconee Winds
              is a 501&#40;c&#41;&#40;3&#41; charitable nonprofit. All donations
              are tax deductable according to law.
            </p>
            <div className="mx-auto my-6">
              <Suspense fallback="Loading...">
                <DonateButton />
              </Suspense>
            </div>
          </div>
          <nav className="mb-10 text-sm" aria-label="quick links">
            <div className=" flex justify-center gap-x-2 md:gap-x-6">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/archive">Archive</NavLink>
              <NavLink href="/membership">Membership</NavLink>
              <NavLink href="/camp">Camp</NavLink>
            </div>
          </nav>
          <Link href="/">
            <div className="z-10 flex flex-col items-center justify-center text-6xl font-semibold tracking-wide ">
              <Logo className="h-40" />
              <span className={dancingScript.className}>Oconee Winds</span>
            </div>
          </Link>
        </div>

        <div className=" flex flex-col items-center border-t border-slate-400/10 pb-10 sm:justify-between">
          <div className="grid grid-cols-2 place-items-center gap-4 border-t border-slate-400/10 pb-4 pt-4 text-left text-slate-600 md:grid-cols-4 md:pb-0">
            <Link
              href="https://www.facebook.com/oconeewinds/"
              className="group font-semibold"
              aria-label="Oconee Winds on Facebook"
            >
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/@oconeewinds"
              className="group w-full text-right font-semibold"
              aria-label="Oconee Winds on Twitter"
            >
              YouTube
            </Link>

            <Link
              href="https://www.instagram.com/oconeewinds/"
              className="group font-semibold"
              aria-label="Oconee Winds on Twitter"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com/oconeewinds/"
              className="group w-full text-right font-semibold"
              aria-label="Oconee Winds on Twitter"
            >
              Twitter
            </Link>
          </div>

          <div className="flex w-full flex-col justify-between pt-4 md:flex-row">
            <p className="max-w-48 mt-6 text-center text-sm text-slate-500">
              Copyright &copy; {new Date().getFullYear()} Oconee Winds. <br />
              All rights reserved.
            </p>
            <p className="mt-6 text-center text-sm text-slate-500 md:text-right ">
              Designed by Rooted Design
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
