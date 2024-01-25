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
import { Container } from '@/components/Container'
import Link from 'next/link'

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className=" mb-4 font-display text-2xl font-semibold text-slate-700 ">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="font-body mb-4 max-w-prose text-base font-medium text-slate-600 md:mb-8 md:text-center md:text-2xl">
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
    <Container
      className="mb-20 flex w-full flex-col justify-center md:gap-4 lg:px-16 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText field={slice.primary.title} components={components} />
      </div>
      <div>
        {slice.items.map((item, index) => (
          <div key={index} className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <PrismicRichText
                    field={item.question}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-body max-w-prose text-left text-base font-medium text-slate-600 lg:text-xl ">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <PrismicRichText
                    field={item.answer}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="font-body w-full max-w-prose text-left text-base font-normal text-slate-600 lg:text-lg">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center font-medium text-slate-700">
        For more any questions email us at{' '}
        <Link className="font-bold" href="mailto:info@oconeewinds.org">
          {' '}
          info@oconeewinds.org
        </Link>
      </p>
    </Container>
  )
}

export default Faq
