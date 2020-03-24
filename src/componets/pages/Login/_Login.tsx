import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { LinkText } from '@/componets/atoms/Text'
import { LoginFormContainer } from '@/componets/containers/LoginFormContainer'
import styled from 'styled-components'

export const Login: React.FC = () => {
  return (
    <Wrapper>
      <LayoutLoginFormContainer>
        <LoginFormContainer />
      </LayoutLoginFormContainer>
      <RegisterLinkText to="/register" textcolor="WHITE" size={15}>
        Need an account?
      </RegisterLinkText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (${media.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  @media (${media.mobile}) {
    padding: 0 ${vw(40)};
  }
`

const LayoutLoginFormContainer = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    max-width: 448px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(200)};
  }
`

const RegisterLinkText = styled(LinkText)`
  display: block;

  @media (${media.desktop}) {
    margin-top: 5px;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  @media (${media.mobile}) {
    margin-top: ${vw(10)};
  }
`
