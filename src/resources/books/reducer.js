import { AUTHENTICATE_SUCCESS } from '../../auth/constants'
import {
  FETCHING_BOOKS_FAILED,
  IS_FETCHING_BOOKS,
  SET_BOOKS,
} from './constants'

const initialState = {
  didFail: false,
  isFetching: false,
  results: [],
}

const ACTION_HANDLERS = {
  [AUTHENTICATE_SUCCESS]: () => (
    initialState
  ),
  [FETCHING_BOOKS_FAILED]: (state) => (
    state.set('didFail', true)
  ),
  [IS_FETCHING_BOOKS]: (state, action) => (
    state.set('isFetching', action.payload)
  ),
  [SET_BOOKS]: (state, action) => (
    state.withMutations((ctx) => {
      ctx.set('results', action.payload)
      ctx.set('didFail', false)
    })
  ),
}

const reducer = (state = initialState, action) => {
  if (!state) return initialState

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
