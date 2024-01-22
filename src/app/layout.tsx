import { Inter, Lexend, Dancing_Script } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { createClient } from '@/prismicio'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const settings = await client.getSingle('settings')

  return {
    metadataBase: new URL('https://${process.env.VERCEL_URL} '),
    title: settings.data.site_title || '',
    description: settings.data.meta_description || '',
    openGraph: {
      title: settings.data.site_title || '',
      url: '',
      siteName: 'Oconee Winds',
      description: settings.data.meta_description || '',
      images: [settings.data.og_image.url || ''],
    },
  }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.className,
        lexend.variable,
        dancingScript.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
