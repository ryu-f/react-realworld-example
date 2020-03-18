import * as creators from './actions'

import { Article, Comment } from '@/types/domain'

import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  articles: Array<Article>
  singleArticle: Article | null
  count: number
  tags: Array<string>
  selectedTag: string
  comments: Array<Comment>
  limit: number
  offset: number
  tagQuery: string
  authorQuery: string
  favoritedQuery: string
}

const initialState: State = {
  articles: [],
  singleArticle: null,
  count: 0,
  tags: [],
  selectedTag: '',
  comments: [],
  limit: 10,
  offset: 0,
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
        authorQuery: action.payload.author || '',
        tagQuery: action.payload.tag || '',
        favoritedQuery: action.payload.favorited || ''
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
