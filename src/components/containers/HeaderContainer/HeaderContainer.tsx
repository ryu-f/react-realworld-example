import * as React from 'react'

import { Header } from '@/components/organisms/Header'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'
import { userSelectors } from '@/store/user'

export const HeaderContainer: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user)
  const { loggedIn } = userSelectors.useLoggedIn()

  return <Header loggedIn={loggedIn} name={username} />
}
