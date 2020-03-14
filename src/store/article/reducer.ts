import * as creators from './actions'

import { MultipleArticlesResponse, TagsResponse } from '@/types/domain'

import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  articles: Array<MultipleArticlesResponse['articles']>
  tags: TagsResponse['tags']
}

const initialState: State = {
  articles: [],
  tags: []
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.GET_ALL_ARTICLE_DATA:
      return {
        ...state,
        articles: action.payload.articles,
        tags: action.payload.tags
      }
    default:
      return state
  }
}
