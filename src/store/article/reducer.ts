import * as creators from './actions'
import { types } from './types'
import { Article, Comment } from '@/types/domain'

import { CreatorToActions } from '@/types/utils'

export type State = {
  articles: Array<Article>
  singleArticle: Article | null
  tags: Array<string>
  comments: Array<Comment>
  limit: number
  offset: number
  currentPage: number
  count: number
  tagQuery: string
  authorQuery: string
  favoritedQuery: string
}

const initialState: State = {
  articles: [],
  singleArticle: null,
  tags: [],
  comments: [],
  limit: 10,
  offset: 0,
  currentPage: 1,
  count: 0,
  tagQuery: '',
  authorQuery: '',
  favoritedQuery: ''
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
        count: action.payload.count,
        limit: action.payload.limit,
        offset: action.payload.offset,
        currentPage: action.payload.currentPage,
        authorQuery: action.payload.author || state.authorQuery,
        tagQuery: action.payload.tag || state.tagQuery,
        favoritedQuery: action.payload.favorited || state.favoritedQuery
      }
    case types.GET_SINGLE_ARTICLE:
      return {
        ...state,
        singleArticle: action.payload.singleArticle
      }
    case types.GET_TAGS:
      return {
        ...state,
        tags: action.payload.tags
      }
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments
      }
    default:
      return state
  }
}
