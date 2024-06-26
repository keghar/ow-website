'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { NavLink } from '@/components/NavLink'
import { dancingScript } from '@/utils/fonts'
import Image from 'next/image'
import Logo from './Logo'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="flex w-full justify-center p-2"
    >
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {/* Links  to About, Concerts, Members, Camp, Donate */}
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/archive">Archive</MobileNavLink>
            <MobileNavLink href="/membership">Membership</MobileNavLink>
            <MobileNavLink href="/camp">Camp</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="https://donorbox.org/oconeewinds">
              Donate
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="pb-10 pt-4">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex w-full items-center md:basis-5/12 xl:basis-4/12 ">
            <Link href="/" aria-label="Home" className=" text-xl font-bold">
              <div className=" flex w-full items-center justify-between gap-3 text-4xl text-slate-700">
                <Logo className="h-32 w-auto lg:h-48" />

                <span className={dancingScript.className}>Oconee Winds</span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center px-8 md:flex md:basis-6/12  md:justify-center md:gap-x-4 lg:basis-7/12 lg:gap-x-6 xl:gap-x-10">
            {/* Links  to About, Concerts, Members, Camp, Donate */}
            <NavLink href="/about">About</NavLink>
            <NavLink href="/archive">Archive</NavLink>
            <NavLink href="/membership">Membership</NavLink>
            <NavLink href="/camp">Camp</NavLink>
          </div>

          <div className="flex items-center justify-end gap-x-5 md:basis-4/12 md:gap-x-8">
            <div className="hidden md:block">
              <Button
                className="w-24 lg:w-32"
                href="https://donorbox.org/oconeewinds"
              >
                Donate
              </Button>
            </div>

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
