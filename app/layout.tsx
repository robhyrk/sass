import type { Metadata, Viewport } from 'next'
import { Baloo_2, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baloo = Baloo_2({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800']
});

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'The Sassy Aesthetician | Beauty & Skincare Services',
  description: 'Y2K kawaii meets professional beauty. Laser hair removal, skin treatments, and microneedling services by The Sassy Aesthetician.',
  generator: 'v0.app',
  keywords: ['aesthetician', 'laser hair removal', 'skin treatments', 'microneedling', 'beauty', 'skincare'],
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#E8B4F8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${quicksand.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
