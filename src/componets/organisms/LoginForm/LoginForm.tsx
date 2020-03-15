import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicButton } from '@/componets/atoms/Button'
import { BasicText } from '@/componets/atoms/Text'
import { InputText } from '@/componets/atoms/InputText'
import { media } from '@/styles/Mixin'
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
      <BasicText size={20}>Sign in to Real World</BasicText>
      <MailInputText
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        ref={register}
      />
      <PasswordInputText
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        ref={register}
      />
      <BasicButton size="BASE" type="submit">
        Sign In
      </BasicButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${BACKGROUND_COLOR.WHITE};

  @media (${media.desktop}) {
    max-width: 448px;
    padding: 40px 40px 35px;
    box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;
  }
`

const MailInputText = styled(InputText)`
  margin-top: 10px;
`

const PasswordInputText = styled(InputText)`
  margin-top: 10px;
`
