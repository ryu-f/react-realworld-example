import React, { useEffect } from 'react'

import { GlobalStyle } from './styles'
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
        <Routes />
      </Main>
    </>
  )
}

const Main = styled.main``
