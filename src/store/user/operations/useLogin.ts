import { useCallback, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authenticate } from '../actions'
import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { usersAPI } from '@/services/users'

type LoginAsyncPayload = {
  email: string
  password: string
  remember: boolean
}

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const loginAsync = useCallback(
    async (input: LoginAsyncPayload) => {
      const { email, password, remember } = input
      setLoading(true)
      setErrorMessage('')
      const response = await usersAPI.login({ email, password })
      setLoading(false)

      if (isError(response)) {
        return response ? setErrorMessage('error') : setErrorMessage('system Error')
      }

      const { token } = response.user
      if (remember) localStorage.setItem('jwt', token)
      API.setToken(token)
      dispatch(authenticate(response.user))
      history.push('/')
    },
    [dispatch]
  )
  return { loginAsync, isLoading, errorMessage }
}
