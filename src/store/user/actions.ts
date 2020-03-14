import { State } from './reducer'
import { types } from './types'

type LoginPayload = {
  payload: Pick<State, 'email' | 'password'>
}

export const login = (input: LoginPayload['payload']) => ({
  type: types.LOGIN,
  payload: input
})
