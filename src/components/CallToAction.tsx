'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { FormEvent, useRef, useState } from 'react'

export function CallToAction() {
  const [input, setInput] = useState('')
  const [successMessage, setSuccessMessage] = useState<MembersSuccessResponse>()
  const [errorMessage, setErrorMessage] = useState('')
  const [active, setActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = input

    const res = await fetch('/api/newsletterContact', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const data = await res.json()

    if (data.error) {
      setErrorMessage('Hey, you are already subscribed!')
      setSuccessMessage(undefined)
      return
    }

    setSuccessMessage(data.res)
    setErrorMessage('')
  }

  const dismissMessages = () => {
    setSuccessMessage(undefined)
    setErrorMessage('')
  }

  return (
    <section
      id="get-started-today"
      className="max-w-screen relative mx-auto flex justify-center overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Email List
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Join our email list to receive information on upcoming events
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                  type="email"
                  className="block w-full rounded-full border-0 p-2 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <Button
              typeof="button"
              type="submit"
              disabled={!input}
              color="white"
              className="mt-4 w-32"
            >
              Submit
            </Button>
          </form>

          <div className="relative mx-auto w-full">
            {(successMessage || errorMessage) && (
              <div
                className="absolute mt-2 flex w-full  items-center space-x-2 text-white"
                onClick={dismissMessages}
              >
                <div className="mx-auto text-xs text-[#3aff6e] sm:text-sm">
                  {successMessage ? (
                    <p>
                      &#10003; We&apos;ve added{' '}
                      <span className="underline">
                        {successMessage.email_address}
                      </span>{' '}
                      to our newsletter.
                    </p>
                  ) : (
                    <p>You are already added to our newsletter.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
