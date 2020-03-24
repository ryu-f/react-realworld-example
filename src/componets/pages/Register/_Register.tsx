import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { LinkText } from '@/componets/atoms/Text'
import { RegistrationFormContainer } from '@/componets/containers/RegistrationFormContainer'
import styled from 'styled-components'

export const Register: React.FC = () => {
  return (
    <Wrapper>
      <LayoutRegistrationFormContainer>
        <RegistrationFormContainer />
      </LayoutRegistrationFormContainer>
      <RegisterLinkText to="/login" textcolor="WHITE" size={15}>
        Have an account?
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

const LayoutRegistrationFormContainer = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    max-width: 448px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(170)};
  }
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

  @media (${media.mobile}) {
    margin-top: ${vw(10)};
  }
`
