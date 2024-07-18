import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ProvideThirdweb from './lib/ThirdwebProvider'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400'
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <ProvideThirdweb>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ProvideThirdweb>
      </body>
    </html>
  )
}