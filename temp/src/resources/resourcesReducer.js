import { combineReducers } from 'redux'
import user from './user/reducer'

export const resourcesReducer = combineReducers({
  user,
})

export default resourcesReducer
