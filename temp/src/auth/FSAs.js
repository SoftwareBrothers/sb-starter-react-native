import {
  AUTHENTICATE_ERROR,
  AUTHENTICATE_START,
  AUTHENTICATE_SUCCESS,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from './constants'

export const signIn = (loginData) => ({
  payload: loginData,
  type: SIGN_IN,
})

export const signUp = (userData) => ({
  payload: userData,
  type: SIGN_UP,
})

export const signOut = () => ({
  type: SIGN_OUT,
})

export const authenticate = () => ({
  type: AUTHENTICATE_START,
})

export const authenticationSuccess = (userData) => ({
  payload: userData,
  type: AUTHENTICATE_SUCCESS,
})

export const authenticationError = () => ({
  type: AUTHENTICATE_ERROR,
})
