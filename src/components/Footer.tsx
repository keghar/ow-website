import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import Logo from './Logo'
import { dancingScript } from '@/utils/fonts'

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-700">
      <Container>
        <div className="flex flex-col py-16">
          <nav className="mb-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">About</NavLink>
              <NavLink href="/archive">Archive</NavLink>
              <NavLink href="#testimonials">Memebership</NavLink>
              <NavLink href="#pricing">Camp</NavLink>
            </div>
          </nav>
          <div className="z-50 flex flex-col items-center justify-center text-6xl font-semibold tracking-wide ">
            <Logo className="h-40" />
            <span className={dancingScript.className}>Oconee Winds</span>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 pb-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://twitter.com"
              className="group"
              aria-label="Oconee Winds on Twitter"
            >
              Twitter
            </Link>
            <Link
              href="facebook.com"
              className="group font-bold"
              aria-label="Oconee Winds on Facebook"
            >
              Facebook
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Oconee Winds. <br /> All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
