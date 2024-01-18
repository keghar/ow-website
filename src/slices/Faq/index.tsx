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
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>
      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <PrismicRichText field={item.question} components={components} />
            <PrismicRichText field={item.answer} components={components} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
