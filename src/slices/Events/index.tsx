import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Event`.
 */
export type EventProps = SliceComponentProps<Content.EventSlice>

/**
 * Component for "Event" Slices.
 */
const Event = ({ slice }: EventProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for event (variation: {slice.variation}) Slices
    </section>
  )
}

export default Event
