import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Innocore Tech Solutions | Full-Stack Web Development Experts',
    template: '%s | Innocore Tech Solutions'
  },
  description: 'Leading full-stack web development company creating cutting-edge, high-performance web applications. Expert solutions for businesses, startups, and entrepreneurs worldwide.',
  keywords: [
    'web development', 
    'full-stack development', 
    'custom web applications', 
    'responsive design', 
    'web solutions', 
    'tech innovation', 
    'startup technology', 
    'enterprise web services',
    'React development',
    'Next.js development',
    'cloud applications',
    'digital transformation'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innocore-shintakinos-projects.vercel.app/',
    siteName: 'Innocore Tech Solutions',
    title: 'Innocore Tech Solutions | Full-Stack Web Development Experts',
    description: 'Leading full-stack web development company creating cutting-edge, high-performance web applications.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innocore Tech Solutions | Full-Stack Web Development Experts',
    description: 'Leading full-stack web development company creating cutting-edge, high-performance web applications.'
  }
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