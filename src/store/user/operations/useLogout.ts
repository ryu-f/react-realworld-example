import * as actions from '../actions'

import { API } from '@/services/API'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const useLogout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = useCallback(() => {
    API.deleteToken()
    dispatch(actions.logout())
    history.push('/')
  }, [dispatch])
  return { logout }
}
