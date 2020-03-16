import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { LayoutMargin } from '@/componets/templates/LayoutMargin'
import { LinkText } from '@/componets/atoms/Text'
import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import styled from 'styled-components'

export const Login: React.FC = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
      <LayoutMargin top={5}>
        <RegisterLinkText to="/register" size={14}>
          Create an account.
        </RegisterLinkText>
      </LayoutMargin>
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

const RegisterLinkText = styled(LinkText)`
  display: block;
`
