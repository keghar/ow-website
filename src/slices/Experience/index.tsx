import { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-center font-display text-3xl font-semibold text-slate-700">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-center font-display text-2xl font-semibold text-slate-600">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-prose text-justify text-base font-medium leading-10 tracking-tight text-slate-600 md:mb-8 md:text-2xl">
      {children}
    </p>
  ),
}

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-6 mt-10 flex flex-col justify-center">
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>

      <div className="flex flex-col justify-around gap-4 px-4 lg:flex-row ">
        {slice.items.map((item, index) => (
          <div key={index} className="mx-auto">
            <PrismicRichText field={item.subtitle} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
