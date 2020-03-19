import { appLoaded, authenticate } from '../actions'

import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { usersAPI } from '@/services/users'

export const useInitialAuth = () => {
  const dispatch = useDispatch()

  const initialAuthAsync = useCallback(
    async (token: string | null) => {
      if (!token) return dispatch(appLoaded())
      API.setToken(token)
      const response = await usersAPI.get()

      if (isError(response)) return dispatch(appLoaded())

      return dispatch(authenticate(response.user))
    },
    [dispatch]
  )

  return { initialAuthAsync }
}
