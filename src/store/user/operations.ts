import * as actions from './actions'

import { useCallback, useState } from 'react'

import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { useDispatch } from 'react-redux'
import { users } from '@/services/users'

type LoginAsyncPayload = {
  email: string
  password: string
}

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const loginAsync = useCallback(
    async (input: LoginAsyncPayload) => {
      const { email, password } = input
      setLoading(true)
      setErrorMessage('')
      const response = await users.login({ email, password })
      setLoading(false)

      if (isError(response)) {
        return response ? setErrorMessage('error') : setErrorMessage('system Error')
      }

      const { token } = response.user
      localStorage.setItem('jwt', token)
      API.setToken(token)
      dispatch(actions.login(response.user))
    },
    [dispatch]
  )
  return { loginAsync, isLoading, errorMessage }
}
