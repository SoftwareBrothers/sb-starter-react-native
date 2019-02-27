import { all, fork } from 'redux-saga/effects'
import networkStatusSaga from 'react-native-network-status-saga'
import { CONNECTION_STATUS } from '../resources/deviceState/constants'
import appInitScreenFlow from '../screens/AppInitScreen/modules/saga'
import authFlow from '../auth/saga'
import resourceBooksFlow from '../resources/books/saga'

export default function* rootSaga () {
  yield all([
    fork(networkStatusSaga, {
      syncAction: CONNECTION_STATUS,
    }),
    fork(authFlow),
    fork(appInitScreenFlow),
    fork(resourceBooksFlow),
  ])
}
