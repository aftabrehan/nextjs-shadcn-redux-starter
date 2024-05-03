import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore } from '@/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: typeof useSelector = useSelector
export const useAppStore: () => AppStore = useStore
