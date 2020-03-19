import { API } from '@/services/API'
import { authenticate } from '../actions'
import { isError } from '@/services/isError'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLoading } from '@/contexts/LoadingContext'
import { usersAPI } from '@/services/users'

export const useInitialAuth = () => {
  const { toggleAppLoaded } = useLoading()
  const dispatch = useDispatch()

  const initialAuthAsync = useCallback(
    async (token: string | null) => {
      if (!token) return toggleAppLoaded(true)
      API.setToken(token)
      const response = await usersAPI.get()

      if (isError(response)) return toggleAppLoaded(true)

      dispatch(authenticate(response.user))
      return toggleAppLoaded(true)
    },
    [dispatch]
  )

  return { initialAuthAsync }
}
