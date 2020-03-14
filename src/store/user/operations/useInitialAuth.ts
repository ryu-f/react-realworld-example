import * as actions from '../actions'

import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { users } from '@/services/users'

export const useInitialAuth = () => {
  const dispatch = useDispatch()

  const initialAuthAsync = useCallback(
    async (token: string | null) => {
      if (!token) return
      API.setToken(token)
      const response = await users.get()

      if (isError(response)) return

      dispatch(actions.login(response.user))
    },
    [dispatch]
  )

  return { initialAuthAsync }
}
