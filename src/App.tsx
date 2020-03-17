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
      <Main>
        <HeaderContainer />
        <Routes />
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </Main>
    </>
  )
}

const Main = styled.main`
  position: relative;
  min-height: 100vh;
`

const LayoutFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`
