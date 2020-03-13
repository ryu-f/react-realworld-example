import * as React from 'react'

import { GlobalStyle } from './styles'
import { Routes } from './Routes'
import styled from 'styled-components'

export const App: React.FC = () => {
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
