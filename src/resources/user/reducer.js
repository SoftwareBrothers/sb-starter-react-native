import { Record } from 'immutable'
import {
  CLEAR_USER_DATA,
  SET_USER_DATA,
} from './constants'

const ACTION_HANDLERS = {
  [CLEAR_USER_DATA]: (state, action) => state.withMutations((ctx) => {
    ctx.set('data', action.payload)
  }),
  [SET_USER_DATA]: (state) => state.withMutations((ctx) => {
    ctx.set('data', null)
  }),
}

const InitialState = Record({
  data: null,
})

const initialState = new InitialState()

export default (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
