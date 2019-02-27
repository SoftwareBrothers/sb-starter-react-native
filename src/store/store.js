import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { isDevelopment } from '../constants/Env'
import rootSaga from './rootSaga'
import makeRootReducer from './rootReducer'

export default (initialState = {}) => {
  const middleware = []
  const enhancers = []

  /* redux-immutable-state-invariant */
  if (isDevelopment) {
    // eslint-disable-next-line
    const invariant = require('redux-immutable-state-invariant').default()
    middleware.push(invariant)
  }

  /* Logger */
  if (isDevelopment) {
    const logger = createLogger({
      collapsed: true,
      stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
    })
    middleware.push(logger)
  }

  /* Saga */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* Store */
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )

  const persistor = persistStore(store)

  /* Start saga runner */
  sagaMiddleware.run(rootSaga)

  return {
    persistor,
    store,
  }
}
