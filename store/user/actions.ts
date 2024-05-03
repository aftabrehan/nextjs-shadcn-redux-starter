import { Dispatch } from 'redux'

import types from './types'

export const setUser = (user: any) => async (dispatch: Dispatch) => {
  dispatch({ type: types.SET_USER, payload: user })
}
