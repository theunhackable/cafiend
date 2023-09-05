 
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cafiend',
  description: 'Coffee fixes everything.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
