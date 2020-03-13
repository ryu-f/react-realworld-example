import { applyMiddleware, compose, createStore } from 'redux'

import { createBrowserHistory } from 'history'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const middlewares: any[] = []

middlewares.push(routerMiddleware(history))

const composeEnhancers =
  typeof window === 'object' && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const configureStore = () => {
  const store = createStore(rootReducer(history), enhancer)
  return store
}

export default configureStore
