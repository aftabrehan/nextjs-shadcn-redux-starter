import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { PayloadAction } from '@reduxjs/toolkit'

import { errorTypes, allTypes } from './utils'

import { userReducer } from '@/store/user'

const appReducer = combineReducers({
  user: userReducer,
})

const { CLEAR_STORE } = allTypes

const rootReducer = (state: any, action: PayloadAction) => {
  if ([CLEAR_STORE].includes(action.type)) {
    storage.removeItem('persist:root')
    return appReducer({}, action)
  }

  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
  blacklist: ['persist'],
}

const reducer = persistReducer(persistConfig, rootReducer)

const ignoredActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  ...errorTypes,
]

export { reducer, ignoredActions }
