import { State } from './reducer'
import { types } from './types'

type Payload = {
  payload: Pick<State, 'email' | 'bio' | 'image' | 'username' | 'token'>
}

export const authenticate = (input: Payload['payload']) => ({
  type: types.AUTHENTICATE,
  payload: input
})

export const appLoaded = () => ({
  type: types.APP_LOADED
})
