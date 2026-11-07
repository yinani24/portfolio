import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: "Yash Inani's Home Page",
  description: 'Yash Inani — software engineer in San Francisco. Projects, background, and a little corner of the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
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
