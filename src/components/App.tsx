import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { Routes } from './Routes'
import { darkModeState, useDarkMode } from '@/atoms/darkMode'
import { darkTheme, lightTheme } from '@/styles/Theme'

import { Footer } from '@/components/organisms/Footer'
import { GlobalStyle } from '@/styles'
import { HeaderContainer } from '@/components/containers/HeaderContainer'
import { ScrollToTop } from '@/components/templates/ScrollToTop'
import { loadingState } from '@/atoms/loading'

import { userOperations } from '@/store/user'

export const App: React.FC = () => {
  const { isAppLoading } = useRecoilValue(loadingState)
  const { isDarkMode } = useRecoilValue(darkModeState)
  const { initialAuthAsync } = userOperations.useInitialAuth()
  const { chaneDarkMode } = useDarkMode()

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) chaneDarkMode(true)
    const token = localStorage.getItem('jwt')
    initialAuthAsync(token)
  }, [])

  return isAppLoading ? (
    <>
      <BrowserRouter>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Main>
            <ScrollToTop />
            <HeaderContainer />
            <Routes />
            <LayoutFooter>
              <Footer />
            </LayoutFooter>
          </Main>
        </ThemeProvider>
      </BrowserRouter>
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
