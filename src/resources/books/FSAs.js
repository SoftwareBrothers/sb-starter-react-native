import {
  FETCH_BOOKS,
  FETCHING_BOOKS_FAILED,
  IS_FETCHING_BOOKS,
  SET_BOOKS,
} from './constants'

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
})
export const setBooks = (books) => ({
  payload: books,
  type: SET_BOOKS,
})

export const isFetching = (isFetchingBooks) => ({
  payload: isFetchingBooks,
  type: IS_FETCHING_BOOKS,
})

export const setFetchingFailed = () => ({
  type: FETCHING_BOOKS_FAILED,
})
