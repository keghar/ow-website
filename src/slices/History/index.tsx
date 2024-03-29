import { Container } from '@/components/Container'
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
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
  paragraph: ({ children }) => (
    <p className="font-body mx-auto mb-4 max-w-prose text-base font-medium  text-slate-700 md:mb-8 md:text-lg lg:text-xl">
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
 * Props for `History`.
 */
export type HistoryProps = SliceComponentProps<Content.HistorySlice>

/**
 * Component for "History" Slices.
 */
const History = ({ slice }: HistoryProps): JSX.Element => {
  return (
    <Container
      className="mb-8 max-w-screen-xl"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mb-4">
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>

      <PrismicRichText field={slice.primary.body} components={components} />
    </Container>
  )
}

export default History
