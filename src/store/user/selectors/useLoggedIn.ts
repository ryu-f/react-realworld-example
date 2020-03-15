import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const useLoggedIn = () => {
  const loggedIn = useSelector((state: RootState) => state.user.token !== null)

  return { loggedIn }
}
