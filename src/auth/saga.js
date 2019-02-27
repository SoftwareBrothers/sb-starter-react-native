import { call, put, takeLatest, select } from 'redux-saga/effects'
import API from '../services/APIService'
import { setUserData } from '../resources/user/FSAs'
import Log from '../lib/Logger'
import { navigate } from '../services/NavigationService'
import LocalSession from './LocalSession'
import { authenticationError, authenticationSuccess } from './FSAs'
import { getUserData } from '../resources/user/selector'
import { getConnectionStatus } from '../resources/deviceState/selector'
import { AuthException } from '../exceptions'
import {
  AUTHENTICATE_START,
  IS_AUTHENTICATING,
  PURGE_USER_DATA,
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
    const token = yield call(() => LocalSession.getSession())
    const currentUserData = yield select(getUserData)
    if (token && currentUserData) {
      const isConnected = yield select(getConnectionStatus)
      if (isConnected) {
        const { data: userData } = yield call(API.me().get)
        yield put(setUserData(userData))
        yield put(authenticationSuccess(userData))
      } else {
        yield call(() => navigate('App'))
      }
    } else {
      throw new AuthException()
    }

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

export function* onSignIn ({ payload: { password, username } }) {
  try {
    yield put({ payload: true, type: IS_AUTHENTICATING })
    const currentUserData = yield select(getUserData)
    const { data: { token, user } } = yield call(() => API.auth().signIn({ password, username }))
    yield call(() => LocalSession.setSession({ token }))
    if (currentUserData && currentUserData.id !== user.id) {
      yield put({ type: PURGE_USER_DATA })
    }
    yield put(setUserData(user))
    yield call(() => navigate('AppInit'))
  } catch (exception) {
    Log.warn(exception)
    yield put({ payload: 'Unable to sign in.', type: SET_SIGN_IN_ERROR })
  } finally {
    yield put({ payload: false, type: IS_AUTHENTICATING })
  }
}

export function* onSignUp ({ payload: { password, username } }) {
  try {
    yield put({ payload: true, type: IS_AUTHENTICATING })
    const { data: { token, user } } = yield call(() => API.auth().signUp({ password, username }))
    yield call(() => LocalSession.setSession({ token }))
    yield put(setUserData(user))
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
