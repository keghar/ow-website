'use client'
import { Container } from './Container'
import { Button } from './Button'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'

import Image from 'next/image'

function Contact() {
  interface FormData {
    name: string
    checkbox: boolean
    message: string
    tel: string
    email: string
    botcheck: boolean
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: 'onTouched',
  })
  const [isSuccess, setIsSuccess] = useState<any>(false)
  const [message, setMessage] = useState<any>(false)

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || '474d37c4-10dc-49b5-9ab0-684e0a233974'

  const { submit: onSubmit } = useWeb3Forms<FormData>({
    access_key: apiKey,
    settings: {
      from_name: '',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (message, data) => {
      setIsSuccess(true)
      setMessage(message)
      reset()
    },
    onError: (message, data) => {
      setIsSuccess(false)
      setMessage(message)
    },
  })

  return (
    <section id="contact">
      <Container className="flex flex-col pb-10 text-center text-gray-700">
        <div className="flex flex-col items-center lg:flex-row lg:gap-x-8">
          <div className="mx-auto flex w-full max-w-xl  flex-col text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* bot */}
              <input
                type="checkbox"
                id="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                {...register('botcheck')}
              ></input>
              <div className="text-left">
                {/* name */}
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  {/* <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  placeholder="Jane Smith"
                  autoComplete="name"
                /> */}
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    autoComplete="false"
                    className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-500 focus:ring-4  ${
                      errors.name
                        ? 'border-red-600 ring-red-100 focus:border-red-600'
                        : 'border-gray-300 ring-gray-100 focus:border-gray-600'
                    }`}
                    {...register('name', {
                      required: 'Full name is required',
                      maxLength: 80,
                    })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.name.message}</small>
                    </div>
                  )}
                </div>
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                {/* <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                  autoComplete="email"
                /> */}
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className={`w-full rounded-md border-2 px-4 py-3  outline-none placeholder:text-gray-500   focus:ring-4  ${
                    errors.email
                      ? 'border-red-600 ring-red-100 focus:border-red-600'
                      : 'border-gray-300 ring-gray-100 focus:border-gray-600'
                  }`}
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                {/* <div className="mt-2">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                  placeholder="555-555-5555"
                  autoComplete="tel"
                />  */}
                {/* </div> */}
                <input
                  id="phone_number"
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="false"
                  className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-500  focus:ring-4  ${
                    errors.tel
                      ? 'border-red-600 ring-red-100 focus:border-red-600'
                      : 'border-gray-300 ring-gray-100 focus:border-gray-600'
                  }`}
                  {...register('tel', {
                    required: 'Enter your phone number',
                    // pattern: {
                    //   value: /^\S+@\S+$/i,
                    //   message: "Please enter a valid phone number",
                    // },
                  })}
                />
                {errors.tel && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.tel.message}</small>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  {/* <textarea
                  rows={6}
                  id="message"
                  className="block w-full rounded-xl border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  autoComplete="off"
                /> */}
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className={`h-36 w-full rounded-md border-2 px-4    py-3 outline-none  placeholder:text-gray-500 focus:ring-4  ${
                      errors.message
                        ? 'border-red-600 ring-red-100 focus:border-red-600'
                        : 'border-gray-300 ring-gray-100 focus:border-gray-600'
                    }`}
                    {...register('message', {
                      required: 'Enter your Message',
                    })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600">
                      {' '}
                      <small>{errors.message.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="mt-2 w-full py-2 lg:mt-4">
                {isSubmitting ? (
                  <svg
                    className="mx-auto h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'Send Message'
                )}
              </Button>
              {/* <Button className="mt-10">Submit</Button> */}
              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-center text-sm text-green-500">
                  {message || 'Success. Message sent successfully'}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-center text-sm text-red-500">
                  {message || 'Something went wrong. Please try later.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
