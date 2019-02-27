import { persistCombineReducers } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import resources, { RESOURCES_REDUCER_KEY } from '../resources/resourcesReducer'
import auth from '../auth/reducer'

const rootPersistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: [
    RESOURCES_REDUCER_KEY,
  ],
}

export default (asyncReducers) => persistCombineReducers(rootPersistConfig, {
  ...asyncReducers,
  [RESOURCES_REDUCER_KEY]: resources,
  auth,
})
