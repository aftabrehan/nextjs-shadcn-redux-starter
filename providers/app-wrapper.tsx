import { useEffect } from 'react'

import { useAppDispatch } from '@/lib/hooks'

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {}, [dispatch])

  return <>{children}</>
}
