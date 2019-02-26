import {
  call,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects'
import { INITIALIZE_APP } from './constants'
import Log from '../../../lib/Logger'
import { authenticate } from '../../../auth/FSAs'
import { AUTHENTICATE_SUCCESS } from '../../../auth/constants'
import { navigate } from '../../../services/NavigationService'

export default function* appInitScreenFlow () {
  yield takeLatest(INITIALIZE_APP, onInitializeApp)
}

function* onInitializeApp () {
  try {
    yield put(authenticate())
    yield take([AUTHENTICATE_SUCCESS])

    /* Fetch mission-critical API resources here */

    yield call(() => navigate('Home'))
  } catch (exception) {
    Log.warn(exception)
  }
}
