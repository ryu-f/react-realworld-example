import React, { useEffect } from 'react'

import { Footer } from '@/componets/organisms/Footer'
import { GlobalStyle } from './styles'
import { HeaderContainer } from '@/componets/containers/HeaderContainer'
import { Routes } from './Routes'
import { ScrollToTop } from '@/componets/templates/ScrollToTop'
import styled from 'styled-components'
import { useLoading } from '@/contexts/LoadingContext'
import { userOperations } from '@/store/user'

export const App: React.FC = () => {
  const { isAppLoaded } = useLoading()
  const { initialAuthAsync } = userOperations.useInitialAuth()

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    initialAuthAsync(token)
  }, [])

  return isAppLoaded ? (
    <>
      <GlobalStyle />
      <Main>
        <ScrollToTop />
        <HeaderContainer />
        <Routes />
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </Main>
    </>
  ) : null
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
