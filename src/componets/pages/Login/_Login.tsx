import * as React from 'react'

import { LinkText } from '@/componets/atoms/Text'
import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Login: React.FC = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
      <RegisterLinkText to="/register" textcolor="WHITE" size={15}>
        Need an account?
      </RegisterLinkText>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const RegisterLinkText = styled(LinkText)`
  display: block;

  ${media.desktop} {
    margin-top: 5px;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`
