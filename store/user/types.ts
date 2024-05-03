import { createActionTypes } from '../utils/helpers'

export const SET_USER = 'SET_USER'
export const CLEAR_STORE = 'CLEAR_STORE'

const userTypes = createActionTypes([SET_USER, CLEAR_STORE])

export default userTypes
