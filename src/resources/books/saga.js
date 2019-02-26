import { call, takeLatest, put } from 'redux-saga/effects'
import { FETCH_BOOKS } from './constants'
import { isFetching, setBooks, setFetchingFailed } from './FSAs'
import API from '../../services/APIService'
import Log from '../../lib/Logger'

export default function* booksFlow () {
  yield takeLatest(FETCH_BOOKS, onFetchBooks)
}

function* onFetchBooks () {
  try {
    yield put(isFetching(true))
    const { data: books } = yield call(API.me().books().getAll)
    yield put(setBooks(books))
  } catch (exception) {
    Log.warn(exception)
    yield put(setFetchingFailed())
  } finally {
    yield put(isFetching(false))
  }
}
