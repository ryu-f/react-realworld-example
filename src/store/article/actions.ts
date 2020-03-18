import { State } from './reducer'
import { types } from './types'

type GetArticlesPayload = Pick<State, 'articles' | 'count'>

export const getArticles = (payload: GetArticlesPayload) => ({
  type: types.GET_ARTICLES,
  payload
})

type GetSingleArticlsPayload = Pick<State, 'singleArticle'>

export const getSingleArticle = (payload: GetSingleArticlsPayload) => ({
  type: types.GET_SINGLE_ARTICLE,
  payload
})

type GetTagsPayload = Pick<State, 'tags'>

export const getTags = (payload: GetTagsPayload) => ({
  type: types.GET_TAGS,
  payload
})
