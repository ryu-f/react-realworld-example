import { State } from './reducer'
import { types } from './types'

type AuthenticatePayload = {
  payload: Pick<State, 'email' | 'bio' | 'image' | 'username' | 'token'>
}

export const authenticate = (payload: AuthenticatePayload['payload']) => ({
  type: types.AUTHENTICATE,
  payload
})

type GetProfilePayload = {
  payload: Pick<State, 'user'>
}

export const getProfile = (payload: GetProfilePayload['payload']) => ({
  type: types.GET_PROFILE,
  payload
})

export const logout = () => ({ type: types.LOGOUT })
