import { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

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
      <div className="flex flex-col justify-center">
        <PrismicRichText field={slice.primary.title} components={components} />

        <div>
          {slice.items.map((item, index) => (
            <div key={index}>
              <PrismicRichText field={item.subtitle} components={components} />
              <PrismicRichText
                field={item.description}
                components={components}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
