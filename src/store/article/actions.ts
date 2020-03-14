import { State } from './reducer'
import { types } from './types'

type GetAllArticleDataPayload = Pick<State, 'articles' | 'tags'>

export const getAllArticleData = (payload: GetAllArticleDataPayload) => ({
  type: types.GET_ALL_ARTICLE_DATA,
  payload
})
