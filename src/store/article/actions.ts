import { State } from './reducer'
import { types } from './types'

type GetArticlesPayload = Pick<State, 'articles' | 'count'>

export const getArticle = (payload: GetArticlesPayload) => ({
  type: types.GET_ARTICLE,
  payload
})

type GetTagsPayload = Pick<State, 'tags'>

export const getTags = (payload: GetTagsPayload) => ({
  type: types.GET_TAGS,
  payload
})
