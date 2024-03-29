import { Container } from '@/components/Container'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'

import { Button } from '../../components/Button'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className=" font-display mb-6 text-2xl font-semibold text-slate-700 lg:text-3xl xl:text-center">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-lg font-semibold text-slate-700 md:text-xl lg:text-2xl xl:mb-4 xl:text-center">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-prose text-base font-medium text-slate-600 md:text-lg lg:text-xl xl:mx-auto xl:text-center">
      {children}
    </p>
  ),

  list: ({ children }) => (
    <ul className=" mx-4 list-disc xl:mx-auto xl:flex xl:max-w-xl xl:flex-col xl:justify-center">
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className="font-body max-w-prose text-base font-medium text-slate-600 md:text-lg lg:text-xl xl:ml-16">
      {children}
    </li>
  ),
  hyperlink: ({ node, children }) => (
    <PrismicNextLink
      field={node.data}
      className="text-base font-bold underline underline-offset-2 md:text-lg lg:text-xl"
    >
      {children}
    </PrismicNextLink>
  ),
}

/**
 * Props for `MoreDetails`.
 */
export type MoreDetailsProps = SliceComponentProps<Content.MoreDetailsSlice>

/**
 * Component for "MoreDetails" Slices.
 */
const MoreDetails = ({ slice }: MoreDetailsProps): JSX.Element => {
  return (
    <Container
      className="flex w-full max-w-screen-lg flex-col md:gap-4 md:px-10 lg:gap-8 lg:px-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="my-12 py-4">
        <PrismicRichText field={slice.primary.title} components={components} />
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        <div className="flex flex-col gap-4">
          {slice.items.map((item, index) => (
            <div key={index} className="my-4">
              <PrismicRichText
                field={item.subtitle_1}
                components={components}
              />
              <div className="xl:mx-auto">
                <PrismicRichText
                  field={item.paragraph}
                  components={components}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default MoreDetails
