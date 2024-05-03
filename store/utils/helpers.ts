// import { allTypes } from '../utils/allTypes'

export const requestActionTypes = (actionType: string) => ({
  request: `${actionType}_REQUEST`,
  success: `${actionType}_SUCCESS`,
  error: `${actionType}_ERROR`,
})

const allTypes: { [index: string]: string } = { CLEAR_STORE: 'CLEAR_STORE' }

export const errorTypes = Object.keys(allTypes).reduce(
  (acc: string[], type) => {
    const typeObj = allTypes[type]
    if (typeObj.includes('ERROR')) acc.push(typeObj)
    return acc
  },
  []
)

export const createActionTypes = (actions: string[]) => {
  const actionTypes: { [index: string]: string } = {}

  actions.map((action: string) => {
    actionTypes[`${action}_REQUEST`] = `${action}_REQUEST`
    actionTypes[`${action}_SUCCESS`] = `${action}_SUCCESS`
    actionTypes[`${action}_ERROR`] = `${action}_ERROR`
    actionTypes[action] = action
  })

  return actionTypes
}
