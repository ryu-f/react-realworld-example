import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import styled from 'styled-components'

export const Register: React.FC = () => {
  return <PageWrapper></PageWrapper>
}

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${BACKGROUND_COLOR.GRADIENT};
`
