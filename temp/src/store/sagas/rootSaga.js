import { all, fork } from 'redux-saga/effects'
import appInitScreenFlow from '../../screens/AppInitScreen/modules/saga'
import authFlow from '../../auth/saga'
import resourceBooksFlow from '../../resources/books/saga'

export default function* rootSaga () {
  yield all([
    fork(authFlow),
    fork(appInitScreenFlow),
    fork(resourceBooksFlow),
  ])
}
