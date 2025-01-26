import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innnocore Tech Solutions',
  description: 'Innocore is a full-stack web development company that specializes in creating innovative and high-performance web applications for businesses and individuals.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
