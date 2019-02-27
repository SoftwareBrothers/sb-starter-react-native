import { persistReducer } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import {
  CLEAR_USER_DATA,
  SET_USER_DATA,
} from './constants'
import { PURGE_USER_DATA } from '../../auth/constants'

export const USER_RESOURCE_REDUCER_KEY = 'user'

const initialState = {
  data: null,
}

const ACTION_HANDLERS = {
  [CLEAR_USER_DATA]: (state) => ({
    ...state,
    data: null,
  }),
  [PURGE_USER_DATA]: () => initialState,
  [SET_USER_DATA]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
}

const reducer = (state = initialState, action) => {
  if (!state) return initialState

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

const persistConfig = {
  key: USER_RESOURCE_REDUCER_KEY,
  storage: FilesystemStorage,
  whitelist: ['data'],
}

export default persistReducer(persistConfig, reducer)
