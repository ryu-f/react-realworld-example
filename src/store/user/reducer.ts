import * as creators from './actions'

import { CreatorToActions } from '@/types/utils'
import { types } from './types'

export type State = {
  email: string
  password: string
}

const initialState: State = {
  email: '',
  password: ''
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
    default:
      return state
  }
}
