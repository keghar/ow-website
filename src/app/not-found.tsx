import Link from 'next/link'

import { Button } from '@/components/Button'
import { SlimLayout } from '@/components/SlimLayout'
import Logo from '@/components/Logo'
import { dancingScript } from '@/utils/fonts'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className=" flex justify-center">
        <div className="z-50">
          <Link href="/" aria-label="Home">
            <div className="text-6xl font-bold">
              <span className={dancingScript.className}>Oconee Winds</span>
              <Logo className="mx-auto w-auto" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="mx-auto mt-10 text-xl font-medium text-gray-700">404</p>
        <h1 className="mx-auto mt-3 text-lg font-semibold text-gray-900">
          Page not found
        </h1>
        <p className="mx-auto mt-3 text-sm text-gray-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" className="mx-auto mt-10">
          Go back home
        </Button>
      </div>
    </SlimLayout>
  )
}
