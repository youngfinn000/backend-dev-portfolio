import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Backend Developer Portfolio',
  description: 'Portfolio of a skilled backend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-black to-blue-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

