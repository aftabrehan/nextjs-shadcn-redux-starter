import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s · Your Project',
    default: 'Get started now',
  },
  description: 'Your Project Description',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en">
    <body className="max-h-screen bg-background font-sans antialiased">
      {children}
    </body>
  </html>
)

export default RootLayout
