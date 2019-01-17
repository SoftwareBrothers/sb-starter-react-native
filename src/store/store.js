import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { isDevelopment } from '../constants/Env'
import rootSaga from './sagas/rootSaga'
import makeRootReducer from './reducers/rootReducer'

export default (initialState = {}) => {
  const middleware = []
  const enhancers = []

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

  /* Start saga runner */
  sagaMiddleware.run(rootSaga)

  return store
}
