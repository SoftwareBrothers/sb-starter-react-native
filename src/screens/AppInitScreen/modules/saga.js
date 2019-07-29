import {
  call,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects'
import { INITIALIZE_APP } from './constants'
import Log from '../../../lib/Logger'
import { authenticate, signOut } from '../../../auth/FSAs'
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR } from '../../../auth/constants'
import { navigate } from '../../../services/NavigationService'

export default function* appInitScreenFlow () {
  yield takeLatest(INITIALIZE_APP, onInitializeApp)
}

function* onInitializeApp () {
  try {
    yield put(authenticate())
    const { type } = yield take([AUTHENTICATE_SUCCESS, AUTHENTICATE_ERROR])

    if (type === AUTHENTICATE_SUCCESS) {
      /* Fetch mission-critical API resources here */
      yield call(() => navigate('Home'))
    } else {
      yield put(signOut())
    }
  } catch (exception) {
    Log.warn(exception)
  }
}
