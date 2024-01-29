import { Button } from './Button'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

export async function DonateButton() {
  const client = createClient()

  const settings = await client.getSingle('settings')
  return (
    <Button className="w-32">
      <PrismicNextLink field={settings.data.donate_link}>
        Donate
      </PrismicNextLink>
    </Button>
  )
}
