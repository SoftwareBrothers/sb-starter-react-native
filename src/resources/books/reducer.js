import { List, Record } from 'immutable'
import { AUTHENTICATE_SUCCESS } from '../../auth/constants'
import {
  FETCHING_BOOKS_FAILED,
  IS_FETCHING_BOOKS,
  SET_BOOKS,
} from './constants'

const InitialState = Record({
  didFail: false,
  isFetching: false,
  results: new List(),
})

const ACTION_HANDLERS = {
  [AUTHENTICATE_SUCCESS]: () => (
    new InitialState()
  ),
  [FETCHING_BOOKS_FAILED]: (state) => (
    state.set('didFail', true)
  ),
  [IS_FETCHING_BOOKS]: (state, action) => (
    state.set('isFetching', action.payload)
  ),
  [SET_BOOKS]: (state, action) => (
    state.withMutations((ctx) => {
      ctx.set('results', List(action.payload))
      ctx.set('didFail', false)
    })
  ),
}

const initialState = new InitialState()

export default function reducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
