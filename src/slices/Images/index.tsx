'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { useState } from 'react'

import { Container } from '@/components/Container'
import { Content, ImageFieldImage } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import Link from 'next/link'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className=" text-center font-display text-3xl font-semibold text-slate-700">
      {children}
    </h2>
  ),
}

/**
 * Props for `Images`.
 */
export type ImagesProps = SliceComponentProps<Content.ImagesSlice>

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="z-10 overflow-hidden bg-slate-900 bg-opacity-80"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="relative max-w-screen-lg">
        <button
          className="absolute -top-12 right-3 rounded-full bg-slate-800 px-2 text-2xl text-white"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

/**
 * Component for "Images" Slices.
 */
const Images = ({ slice }: ImagesProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({})

  const openModal = (image: object) => {
    setIsOpen(true)
    setSelectedImage(image as object)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <section
      className="mx-auto flex max-w-screen-sm flex-col justify-center p-2 py-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className=" mb-6 flex flex-col justify-center">
        {' '}
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>
      <div className="mx-auto flex justify-center">
        <Carousel
          className=" h-full w-80 px-2  md:mx-auto md:w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="">
            {slice.items.map((item, index) => (
              //@ts-ignore

              <CarouselItem
                className="basis-3/4 md:basis-1/2 lg:w-full lg:basis-1/2"
                onClick={() => openModal(item.image as {})}
                key={index}
              >
                <PrismicNextImage field={item.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-full md:-left-8  " />
          <CarouselNext className="-right-4 top-full md:-right-8" />
        </Carousel>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedImage && (
          //@ts-ignore
          <PrismicNextImage field={selectedImage as object | null} />
        )}
      </Modal>
    </section>
  )
}

export default Images
