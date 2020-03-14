import React, { useEffect } from 'react'

import { Footer } from '@/componets/organisms/Footer'
import { GlobalStyle } from './styles'
import { HeaderContainer } from '@/componets/containers/HeaderContainer'
import { Routes } from './Routes'
import styled from 'styled-components'
import { userOperations } from '@/store/user'

export const App: React.FC = () => {
  const { initialAuthAsync } = userOperations.useInitialAuth()

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    initialAuthAsync(token)
  }, [])

  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main``
