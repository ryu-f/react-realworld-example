import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions'
import { API } from '@/services/API'

export const useLogout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const logout = useCallback(() => {
    API.deleteToken()
    localStorage.removeItem('jwt')
    dispatch(actions.logout())
    history.push('/')
  }, [dispatch])
  return { logout }
}
