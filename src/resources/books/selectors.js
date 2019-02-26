import { createSelector } from 'reselect'
import _ from 'lodash'

/* Getters */
const getBooks = (state) => state.resources.books.results

/* Memoized selectors */
export const selectBooks = createSelector(
  getBooks,
  (books) => books && books.toArray(),
)

export const selectBooksIds = createSelector(
  selectBooks,
  (books) => _.map(books, (book) => book.id),
)
