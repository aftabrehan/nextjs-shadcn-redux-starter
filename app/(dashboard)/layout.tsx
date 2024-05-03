import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/providers/theme-providers'
import { StoreProvider } from '@/providers/store-provider'
import { LoadingScreen } from '@/components/loading-screen'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s · Your Project',
    default: 'Get started now',
  },
  description: 'Your Project Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={cn('bg-white dark:bg-background', inter.className)}>
            {children}
          </div>
        </ThemeProvider>
      </StoreProvider>
    </Suspense>
  )
}
