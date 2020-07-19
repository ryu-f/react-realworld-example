import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../actions'
import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { useLoading } from '@/atoms/loading'
import { usersAPI } from '@/services/users'

export const useInitialAuth = () => {
  const { appLoaded } = useLoading()
  const dispatch = useDispatch()

  const initialAuthAsync = useCallback(
    async (token: string | null) => {
      if (!token) return appLoaded()
      API.setToken(token)
      const response = await usersAPI.get()

      if (isError(response)) return appLoaded()

      dispatch(authenticate(response.user))
      return appLoaded()
    },
    [dispatch]
  )

  return { initialAuthAsync }
}
