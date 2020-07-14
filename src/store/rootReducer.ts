import { ArticleState, articleReducer } from './article'
import { UserState, userReducer } from './user'

import { combineReducers } from 'redux'

export type RootState = {
  user: UserState
  article: ArticleState
}

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer
})

export default rootReducer
