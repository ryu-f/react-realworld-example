import * as React from 'react'

import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { Header } from '@/components/organisms/Header'
import { RootState } from '@/store/rootReducer'
import { userSelectors } from '@/store/user'

export const HeaderContainer: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user)
  const { loggedIn } = userSelectors.useLoggedIn()
  const { pathname } = useLocation()

  return <Header loggedIn={loggedIn} name={username} currentPath={pathname} />
}
