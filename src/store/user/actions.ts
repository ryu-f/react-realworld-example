import { State } from './reducer'
import { types } from './types'

type LoginPayload = {
  payload: Pick<State, 'email' | 'bio' | 'image' | 'username' | 'token'>
}

export const login = (input: LoginPayload['payload']) => ({
  type: types.LOGIN,
  payload: input
})
