import { combineReducers } from 'redux'
import { ArticleState, articleReducer } from './article'
import { UserState, userReducer } from './user'

export type RootState = {
  user: UserState
  article: ArticleState
}

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer
})

export default rootReducer
