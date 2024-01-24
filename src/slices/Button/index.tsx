import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { Button as CustomButton } from '@/components/Button'
import { Container } from '@/components/Container'

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>

/**
 * Component for "Button" Slices.
 */
const Button = ({ slice }: ButtonProps): JSX.Element => {
  return (
    <Container
      className="flex justify-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomButton className="mx-auto w-40">
        <PrismicNextLink field={slice.primary.button_link}>
          {slice.primary.button_name}
        </PrismicNextLink>
      </CustomButton>
    </Container>
  )
}

export default Button
