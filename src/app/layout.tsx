import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yash Inani Portfolio',
  description: 'A website to showcase Yash Inani\'s projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>{children}
      <Toaster 
        toastOptions={{
          success: {
            style: {
              background: '#090E16',
              fontFamily: 'Raleway',
              fontWeight: 'bold',
              color: 'rgba(123, 74, 226)'
            },
          },
          error: {
            style: {
              background: '#090E16',
              fontFamily: 'Raleway',
              fontWeight: 'bold',
              color: 'rgba(123, 74, 226)'
            },
          },
        }}
      />
      </body>
    </html>
  )
}
