import { CONNECTION_STATUS } from './constants'

const initialState = {
  connectionStatus: false,
}

const ACTION_HANDLERS = {
  [CONNECTION_STATUS]: (state, action) => ({
    ...state,
    connectionStatus: action.status,
  }),
}

export default (state = initialState, action) => {
  if (!state) return initialState

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
