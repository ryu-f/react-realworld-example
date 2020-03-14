import * as creators from './actions'

import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  email: string
  token: null | string
  username: string
  bio: string
  image: string
}

const initialState: State = {
  email: '',
  token: null,
  username: '',
  bio: '',
  image: ''
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        username: action.payload.username,
        bio: action.payload.bio,
        image: action.payload.image
      }
    default:
      return state
  }
}
