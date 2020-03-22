import { State } from './reducer'
import { types } from './types'

type GetArticlesPayload = {
  articles: State['articles']
  count: State['count']
  currentPage: State['currentPage']
  offset: State['offset']
  limit: State['limit']
  author?: State['authorQuery']
  tag?: State['tagQuery']
  favorited?: State['favoritedQuery']
}

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

type GetCommentsPayload = Pick<State, 'comments'>

export const getComments = (payload: GetCommentsPayload) => ({
  type: types.GET_COMMENTS,
  payload
})
