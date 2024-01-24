'use client'

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          width: '80%',
          maxWidth: '500px',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            border: 'none',
            background: 'transparent',
            fontSize: '1.5em',
          }}
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
  const [selectedImage, setSelectedImage] = useState('')

  const openModal = (image: string) => {
    setIsOpen(true)
    setSelectedImage(image)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Container
      className="mt-12 flex w-full flex-col justify-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-6">
        {' '}
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>

      <div className="grid grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {slice.items.map((item, index) => (
          <div onClick={() => openModal(item.image)} key={index} className="">
            <PrismicNextImage field={item.image} height={200} width={200} />
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedImage && (
          <PrismicNextImage
            field={selectedImage as ImageFieldImage | null | undefined}
          />
        )}
      </Modal>
    </Container>
  )
}

export default Images
