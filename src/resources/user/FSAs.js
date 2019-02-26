import {
  CLEAR_USER_DATA,
  SET_USER_DATA,
} from './constants'

export const clearUserData = () => ({
  type: CLEAR_USER_DATA,
})

export const setUserData = (userData) => ({
  payload: userData,
  type: SET_USER_DATA,
})
