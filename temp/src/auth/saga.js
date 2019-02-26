import { call, put, takeLatest } from 'redux-saga/effects'
import API from '../services/APIService'
import { setUserData } from '../resources/user/FSAs'
import Log from '../lib/Logger'
import { navigate } from '../services/NavigationService'
import LocalSession from './LocalSession'
import { authenticationError, authenticationSuccess } from './FSAs'
import {
  AUTHENTICATE_START,
  IS_AUTHENTICATING,
  SET_SIGN_IN_ERROR,
  SET_SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from './constants'

export default function* authenticationFlow () {
  yield takeLatest(AUTHENTICATE_START, onAuthenticate)
  yield takeLatest(SIGN_IN, onSignIn)
  yield takeLatest(SIGN_UP, onSignUp)
  yield takeLatest(SIGN_OUT, onSignOut)
}

export function* onAuthenticate () {
  try {
    yield put({ payload: true, type: IS_AUTHENTICATING })
    const { data: userData } = yield call(API.me().get)
    yield put(setUserData(userData))
    yield put(authenticationSuccess(userData))

    /* You may update locally stored session data here (e.g. refreshed token) */
    // yield call(() => LocalSession.setSession({ token }))
  } catch (exception) {
    Log.warn(exception)
    yield put(authenticationError())
    yield call(onSignOut)
  } finally {
    yield put({ payload: false, type: IS_AUTHENTICATING })
  }
}

export function* onSignIn ({ payload: { email, password } }) {
  try {
    yield put({ payload: true, type: IS_AUTHENTICATING })
    const { data: { token } } = yield call(() => API.auth().signIn({ email, password }))
    yield call(() => LocalSession.setSession({ token }))
    yield call(() => navigate('AppInit'))
  } catch (exception) {
    Log.warn(exception)
    yield put({ payload: 'Unable to sign in', type: SET_SIGN_IN_ERROR })
  } finally {
    yield put({ payload: false, type: IS_AUTHENTICATING })
  }
}

export function* onSignUp ({ payload: { email, password } }) {
  try {
    yield put({ payload: true, type: IS_AUTHENTICATING })
    const { data: { token } } = yield call(() => API.auth().signUp({ email, password }))
    yield call(() => LocalSession.setSession({ token }))
    yield call(() => navigate('AppInit'))
  } catch (exception) {
    Log.warn(exception)
    yield put({ payload: 'Unable to sign up', type: SET_SIGN_UP_ERROR })
  } finally {
    yield put({ payload: false, type: IS_AUTHENTICATING })
  }
}

export function* onSignOut () {
  try {
    yield call(LocalSession.deleteSession)
    yield call(() => navigate('Auth'))
  } catch (exception) {
    Log.warn(exception)
  }
}
