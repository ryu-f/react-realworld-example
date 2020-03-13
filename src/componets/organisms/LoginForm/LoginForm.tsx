import * as React from 'react'

import { BasicButton } from '@/componets/atoms/Button'
import { InputText } from '@/componets/atoms/InputText'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type Props = {
  onSubmit: (data: FormData) => void
}

type FormData = {
  email: string
  password: string
}

export const LoginForm: React.FC<Props> = props => {
  const { onSubmit } = props
  const { register, handleSubmit } = useForm<FormData>()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MailInputText type="email" name="email" placeholder="email" ref={register} />
      <PasswordInputText type="password" name="password" placeholder="password" ref={register} />
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
