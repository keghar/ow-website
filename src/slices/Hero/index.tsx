import { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="font-display mx-auto max-w-2xl text-[1.6rem] tracking-tight text-slate-700 sm:text-[1.7rem] md:text-5xl lg:max-w-none lg:text-7xl ">
      {children}
    </h1>
  ),
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Container className="my-16 mb-20 flex flex-col justify-center text-center md:my-28 lg:my-20 xl:my-0">
      <PrismicRichText field={slice.primary.heading} components={components} />

      <div className="mt-10 max-w-screen-lg lg:mx-auto">
        <PrismicNextImage
          field={slice.primary.main_image}
          priority
          className="object-crop"
        />
      </div>
      <div className="mt-10 flex justify-center gap-x-6 md:mt-14">
        <Button className="w-40">
          <PrismicNextLink field={slice.primary.button1_link}>
            {slice.primary.button1_label}
          </PrismicNextLink>
        </Button>
        <Button className="w-40 font-semibold" variant="outline">
          <PrismicNextLink field={slice.primary.button2_link}>
            {slice.primary.button2_label}
          </PrismicNextLink>
        </Button>
      </div>
    </Container>
  )
}
export default Hero
