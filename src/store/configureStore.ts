import { applyMiddleware, compose, createStore } from 'redux'

import rootReducer from './rootReducer'

const middlewares: any[] = []

const composeEnhancers =
  typeof window === 'object' && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const configureStore = () => {
  const store = createStore(rootReducer, enhancer)
  return store
}

export default configureStore
