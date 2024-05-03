'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { AppWrapper } from '@/providers/app-wrapper'

import { store, persistor } from '@/store'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppWrapper>{children}</AppWrapper>
    </PersistGate>
  </Provider>
)
