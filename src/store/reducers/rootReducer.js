import { combineReducers } from 'redux'
import resources from '../../resources/resourcesReducer'
import auth from '../../auth/reducer'

export default (asyncReducers) => combineReducers({
  ...asyncReducers,
  auth,
  resources,
  // screens: combineReducers({
  // }),
})
