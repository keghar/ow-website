import { Container } from '@/components/Container'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import { data } from 'autoprefixer'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mb-4 mt-12 text-center text-2xl font-semibold md:mb-8">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-md text-center text-base font-medium leading-10 tracking-tight text-slate-600 md:mb-8 md:text-2xl">
      {children}
    </p>
  ),
}

/**
 * Props for `CampInformation`.
 */
export type CampInformationProps =
  SliceComponentProps<Content.CampInformationSlice>

/**
 * Component for "CampInformation" Slices.
 */
const CampInformation = ({ slice }: CampInformationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-center">
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        <PrismicRichText field={slice.primary.date} components={components} />
        <PrismicRichText
          field={slice.primary.location}
          components={components}
        />
        ;<PrismicRichText field={slice.primary.deadline_info} />
        <PrismicRichText field={slice.primary.cost} components={components} />
        <PrismicRichText field={slice.primary.staff} components={components} />
        <PrismicRichText
          field={slice.primary.who_can_attend}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.acceptance_date}
          components={components}
        />
        <PrismicNextLink field={slice.primary.registration_form}>
          Register Here
        </PrismicNextLink>
      </div>
    </section>
  )
}

export default CampInformation
