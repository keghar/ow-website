import { Container } from '@/components/Container'
import { Content } from '@prismicio/client'
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './../../components/Accordion'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className=" font-display text-2xl font-semibold text-slate-700 lg:text-3xl xl:text-center">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-2 text-left font-display text-lg font-semibold text-slate-700 lg:text-xl">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-prose px-4 text-justify text-base  font-medium text-slate-600">
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
    <Container
      className="flex w-full flex-col md:px-10 lg:px-16 xl:my-10 xl:max-w-4xl"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="my-10 flex flex-col xl:justify-center">
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>

      <div className="">
        {slice.items.map((item, index) => (
          <div key={index} className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {' '}
                  <PrismicRichText
                    field={item.subtitle}
                    components={components}
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <PrismicRichText
                    field={item.description}
                    components={components}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Experience
