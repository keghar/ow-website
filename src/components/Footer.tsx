import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-bold tracking-wide">
              Oconee Winds
            </span>
            <span>Logo</span>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">About</NavLink>
              <NavLink href="#features">Concerts</NavLink>
              <NavLink href="#testimonials">Memebership</NavLink>
              <NavLink href="#pricing">Camp</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
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
              F
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Oconee Winds. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
