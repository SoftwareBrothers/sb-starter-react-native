import {
  IS_AUTHENTICATING,
  SET_SIGN_IN_ERROR,
  SET_SIGN_UP_ERROR,
  SIGN_OUT,
} from './constants'

const initialState = {
  isAuthenticating: false,
  signInError: null,
  signUpError: null,
}

const ACTION_HANDLERS = {
  [IS_AUTHENTICATING]: (state, action) => ({
    ...state,
    isAuthenticating: action.payload,
  }),
  [SET_SIGN_IN_ERROR]: (state, action) => ({
    ...state,
    signInError: action.payload,
  }),
  [SET_SIGN_UP_ERROR]: (state, action) => ({
    ...state,
    signUpError: action.payload,
  }),
  [SIGN_OUT]: () => (
    initialState
  ),
}

export default (state = initialState, action) => {
  if (!state) return initialState

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
