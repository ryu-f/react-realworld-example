import { useCallback, useState } from 'react'

import { API } from '@/services/API'
import { authenticate } from '../actions'
import { isError } from '@/services/isError'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { usersAPI } from '@/services/users'

type LoginAsyncPayload = {
  username: string
  email: string
  password: string
  remember: boolean
}

export const useRegistration = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const registrationAsync = useCallback(
    async (input: LoginAsyncPayload) => {
      const { username, email, password, remember } = input
      setLoading(true)
      setErrorMessage('')
      const response = await usersAPI.register({ username, email, password })
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
  return { registrationAsync, isLoading, errorMessage }
}
