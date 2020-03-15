import * as React from 'react'

import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import styled from 'styled-components'

export const Login: React.FC = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: block;
`
