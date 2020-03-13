import * as React from 'react'

import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import styled from 'styled-components'

export const Top: React.FC = () => (
  <PageWrapper>
    <LoginFormContainer />
  </PageWrapper>
)

const PageWrapper = styled.div`
  width: 100%;
  padding: 80px 40px;
`
