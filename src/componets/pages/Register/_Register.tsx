import * as React from 'react'

import { LinkText } from '@/componets/atoms/Text'
import { RegistrationFormContainer } from '@/componets/containers/RegistrationFormContainer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Register: React.FC = () => {
  return (
    <Wrapper>
      <RegistrationFormContainer />
      <RegisterLinkText to="/login" textcolor="WHITE" size={15}>
        Have an account?
      </RegisterLinkText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
