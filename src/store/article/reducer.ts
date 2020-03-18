import * as creators from './actions'

import { Article } from '@/types/domain'
import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  articles: Array<Article>
  singleArticle: Article | null
  count: number
  tags: Array<string>
  selectedTag: string
  limit: number
  offset: number
}

const initialState: State = {
  articles: [],
  singleArticle: null,
  count: 0,
  tags: [],
  selectedTag: '',
  limit: 10,
  offset: 0
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
        count: action.payload.count
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
    default:
      return state
  }
}
