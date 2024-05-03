import { PayloadAction } from '@reduxjs/toolkit'

import types from './types'
import init from './init'

export const userReducer = (state = init || {}, action: PayloadAction) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
