import { persistCombineReducers } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import user, { USER_RESOURCE_REDUCER_KEY } from './user/reducer'
import deviceState from './deviceState/reducer'

export const RESOURCES_REDUCER_KEY = 'resources'

const persistConfig = {
  key: RESOURCES_REDUCER_KEY,
  storage: FilesystemStorage,
  whitelist: [
    USER_RESOURCE_REDUCER_KEY,
  ],
}

const resourcesReducer = persistCombineReducers(persistConfig, {
  [USER_RESOURCE_REDUCER_KEY]: user,
  deviceState,
})

export default resourcesReducer
