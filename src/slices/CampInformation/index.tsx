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
    <h2 className=" text-center font-display text-3xl font-semibold text-slate-700">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 text-center text-base font-medium leading-10 tracking-tight text-slate-600 md:mb-8 md:text-2xl">
      {children}
    </p>
  ),

  list: ({ children }) => <ul className=" list-disc">{children}</ul>,
  listItem: ({ children }) => (
    <li className="font-body text-base font-medium tracking-tight text-slate-600 md:mb-8 md:text-2xl">
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-2 flex flex-col justify-center ">
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
      </div>
      <div className="flex justify-center">
        <PrismicRichText field={slice.primary.date} components={components} />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-center font-display text-3xl font-semibold text-slate-700">
          Location
        </h3>
        <div className="mx-auto flex flex-col justify-center">
          <div className="mx-auto mt-2">
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
        <h3 className="text-center font-display text-3xl font-semibold text-slate-700">
          Cost
        </h3>
        <div className="mx-auto mt-2">
          <PrismicRichText field={slice.primary.cost} components={components} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-center font-display text-3xl font-semibold text-slate-700">
          Staff
        </h3>
        <div className="mx-auto mt-2 max-w-3xl ">
          <PrismicRichText
            field={slice.primary.staff}
            components={components}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-center font-display text-3xl font-semibold text-slate-700">
            Who Can Attend
          </h3>
          <div className="mx-auto mt-2 max-w-xl">
            <PrismicRichText
              field={slice.primary.who_can_attend}
              components={components}
            />
          </div>
        </div>
        <div className="mx-auto max-w-xl">
          <PrismicRichText
            field={slice.primary.acceptance_date}
            components={components}
          />
        </div>
        <Button className="mx-auto w-48">
          <PrismicNextLink field={slice.primary.registration_form}>
            Register Here
          </PrismicNextLink>
        </Button>
      </div>
    </section>
  )
}

export default CampInformation
