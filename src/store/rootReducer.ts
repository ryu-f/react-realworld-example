import { ArticleState, articleReducer } from './article'
import { RouterState, connectRouter } from 'connected-react-router'
import { UserState, userReducer } from './user'

import { History } from 'history'
import { combineReducers } from 'redux'

export interface RootState {
  user: UserState
  article: ArticleState
  router: RouterState
}

const rootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    article: articleReducer,
    router: connectRouter(history)
  })

export default rootReducer
