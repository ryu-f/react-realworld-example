import * as creators from './actions'

import { CreatorToActions } from '@/types/utils'
import { Profile } from '@/types/domain'
import { types } from './types'

export type State = {
  email: string
  token: null | string
  username: string
  bio: null | string
  image: null | string
  user: null | Profile
  loaded: boolean
}

const initialState: State = {
  email: '',
  token: null,
  username: '',
  bio: null,
  image: null,
  user: null,
  loaded: false
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.AUTHENTICATE:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        username: action.payload.username,
        bio: action.payload.bio,
        image: action.payload.image,
        loaded: true
      }
    case types.GET_PROFILE:
      return {
        ...state,
        user: action.payload.user
      }
    case types.APP_LOADED:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}
