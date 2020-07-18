import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'

export const useLoggedIn = () => {
  const loggedIn = useSelector((state: RootState) => state.user.token !== null)

  return { loggedIn }
}
