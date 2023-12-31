import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/Layout/Header'
import { Footer } from '@/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omegapoint CS TGIF',
  description: 'Omegapoint CS TGIF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
