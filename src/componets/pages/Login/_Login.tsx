import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicText } from '@/componets/atoms/Text'
import { Link } from 'react-router-dom'
import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Login: React.FC = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
      <TextLink to="/register">
        <BasicText size={14}>Create an account.</BasicText>
      </TextLink>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${BACKGROUND_COLOR.GRADIENT};
`

const TextLink = styled(Link)`
  display: block;

  @media (${media.desktop}) {
    margin-top: 5px;
  }
`
