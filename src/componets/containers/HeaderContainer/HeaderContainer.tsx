import * as React from 'react'

import { Header } from '@/componets/organisms/Header'
import { userSelectors } from '@/store/user'

export const HeaderContainer: React.FC = () => {
  const { loggedIn } = userSelectors.useLoggedIn()

  return (
    <>
      <Header loggedIn={loggedIn} />
    </>
  )
}
