import * as React from 'react'

import { BasicButton } from '@/componets/atoms/Button'
import { InputText } from '@/componets/atoms/InputText'
import styled from 'styled-components'

type Props = {
  onSubmit: (e: React.FormEvent) => void
}

export const LoginForm: React.FC<Props> = props => {
  const { onSubmit } = props

  return (
    <Form onSubmit={onSubmit}>
      <MailInputText type="email" />
      <PasswordInputText type="password" />
      <BasicButton size="BASE" textcolor="BLACK" type="submit">
        Submit
      </BasicButton>
    </Form>
  )
}

const Form = styled.form`
  display: block;
`

const MailInputText = styled(InputText)`
  margin-top: 10px;
`

const PasswordInputText = styled(InputText)`
  margin-top: 10px;
`
