import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className=" font-display text-2xl font-semibold text-slate-700 lg:text-3xl ">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-prose text-base font-medium text-slate-600 md:text-lg lg:text-xl">
      {children}
    </p>
  ),

  list: ({ children }) => <ul className=" list-disc">{children}</ul>,
  listItem: ({ children }) => (
    <li className="font-body max-w-prose text-base font-medium text-slate-600 md:text-lg lg:text-xl">
      {children}
    </li>
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
  console.log(slice.primary.who_can_attend)
  return (
    <Container
      className="flex w-full flex-col md:gap-4 md:px-10 lg:gap-8 lg:px-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-2 flex flex-col ">
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
      </div>
      <div className="flex">
        <PrismicRichText field={slice.primary.date} components={components} />
      </div>
      <div className="flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-slate-700 lg:text-3xl ">
          Location
        </h3>
        <div className=" flex flex-col ">
          <div className=" mt-2 lg:mb-4">
            <PrismicRichText
              field={slice.primary.location}
              components={components}
            />
          </div>

          <PrismicRichText
            field={slice.primary.deadline_info}
            components={components}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-slate-700 lg:text-3xl">
          Cost
        </h3>
        <div className=" mt-2">
          <PrismicRichText field={slice.primary.cost} components={components} />
        </div>
      </div>
      <div className="flex flex-col lg:gap-6">
        <h3 className="font-display text-2xl font-semibold text-slate-700 lg:text-3xl">
          Staff
        </h3>
        <div className="mt-2 ">
          <PrismicRichText
            field={slice.primary.staff}
            components={components}
          />
        </div>
        <div className=" flex flex-col">
          <h3 className="font-display text-2xl font-semibold text-slate-700 lg:text-3xl">
            Who Can Attend
          </h3>
          <div className="mt-2 px-4">
            <PrismicRichText
              field={slice.primary.who_can_attend}
              components={components}
            />
          </div>
        </div>
        <div className="mt-4 max-w-prose px-2">
          <PrismicRichText
            field={slice.primary.acceptance_date}
            components={components}
          />
        </div>
        <div className="my-6 flex justify-center gap-4 lg:gap-8">
          <Button className="w-40 pt-2">
            <PrismicNextLink field={slice.primary.registration_form}>
              Register Here
            </PrismicNextLink>
          </Button>
          <Button variant="outline" className="w-40 pt-2 font-semibold">
            <PrismicNextLink field={slice.primary.sample_schedule}>
              Sample Schedule
            </PrismicNextLink>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default CampInformation
