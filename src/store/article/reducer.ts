import * as creators from './actions'

import { Article, TagsResponse } from '@/types/domain'

import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  articles: Array<Article>
  count: number
  tags: TagsResponse['tags']
  selectedTag: string
}

const initialState: State = {
  articles: [],
  count: 0,
  tags: [],
  selectedTag: ''
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.GET_ARTICLE:
      return {
        ...state,
        articles: action.payload.articles,
        count: action.payload.count
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
