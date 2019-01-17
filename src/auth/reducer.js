import { Record } from 'immutable'
import {
  IS_AUTHENTICATING,
  SET_SIGN_IN_ERROR,
  SET_SIGN_UP_ERROR,
  SIGN_OUT,
} from './constants'

const InitialState = Record({
  isAuthenticating: false,
  signInError: null,
  signUpError: null,
})

const ACTION_HANDLERS = {
  [IS_AUTHENTICATING]: (state, action) => (
    state.set('isAuthenticating', action.payload)
  ),
  [SET_SIGN_IN_ERROR]: (state, action) => (
    state.set('signInError', action.payload)
  ),
  [SET_SIGN_UP_ERROR]: (state, action) => (
    state.set('signUpError', action.payload)
  ),
  [SIGN_OUT]: () => (
    new InitialState()
  ),
}

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
