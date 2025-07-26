import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASAP.ai - AI Agents & Automation',
  description: 'Transform your business with cutting-edge AI agents and automation solutions. ASAP.ai empowers organizations to scale efficiently and innovate faster.',
  keywords: 'AI agents, automation, artificial intelligence, business transformation, ASAP.ai',
  authors: [{ name: 'ASAP.ai' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06b6d4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
