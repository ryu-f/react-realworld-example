import * as actions from '../actions'

import { useCallback, useState } from 'react'

import { API } from '@/services/API'
import { isError } from '@/services/isError'
import { useDispatch } from 'react-redux'
import { usersAPI } from '@/services/users'

type UpdateAsyncPayload = {
  email: string
  password: string
  username: string
  bio: string
  image: string
}

export const useUpdate = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const updateAsync = useCallback(
    async (input: UpdateAsyncPayload) => {
      const { username, email, password, bio, image } = input
      setLoading(true)
      setErrorMessage('')
      const response = await usersAPI.update({ username, email, password, bio, image })
      setLoading(false)

      if (isError(response)) {
        return response ? setErrorMessage('error') : setErrorMessage('system Error')
      }

      const { token } = response.user
      localStorage.setItem('jwt', token)
      API.setToken(token)
      dispatch(actions.authenticate(response.user))
    },
    [dispatch]
  )
  return { updateAsync, isLoading, errorMessage }
}
