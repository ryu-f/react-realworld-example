import { RouterState, connectRouter } from 'connected-react-router'

import { History } from 'history'
import { combineReducers } from 'redux'

export interface RootState {
  router: RouterState
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  })

export default rootReducer
