import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicButton } from '@/componets/atoms/Button'
import { BasicText } from '@/componets/atoms/Text'
import { CheckBox } from '@/componets/atoms/CheckBox'
import { InputText } from '@/componets/atoms/InputText'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type Props = {
  onSubmit: (data: FormData) => void
}

type FormData = {
  username: string
  email: string
  password: string
  remember: boolean
}

export const RegistrationForm: React.FC<Props> = props => {
  const { onSubmit } = props
  const { register, handleSubmit, errors } = useForm<FormData>({ validateCriteriaMode: 'all' })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BasicText size={20}>Sign up to Real World</BasicText>
      <LayoutInput>
        <InputText
          type="text"
          name="username"
          id="username"
          placeholder="User name"
          ref={register({ required: 'User name is required.' })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.username && errors.username.message}
        </ErrorText>
      </LayoutInput>
      <LayoutInput>
        <InputText
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          ref={register({ required: 'Email address is required.' })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.email && errors.email.message}
        </ErrorText>
      </LayoutInput>
      <LayoutInput>
        <InputText
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={register({
            required: 'Password is required.',
            minLength: { value: 6, message: 'Minlength is 6' },
            maxLength: { value: 99, message: 'Maxlength is 99' }
          })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.password && errors.password.message}
        </ErrorText>
      </LayoutInput>
      <LayoutFoot>
        <CheckBox name="remember" id="remember" ref={register}>
          Keep signed in
        </CheckBox>
      </LayoutFoot>
      <LayoutFoot>
        <BasicButton size="LARGE" type="submit">
          Sign Up
        </BasicButton>
      </LayoutFoot>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${BACKGROUND_COLOR.WHITE};
  border-radius: 5px;

  @media (${media.desktop}) {
    max-width: 448px;
    padding: 40px 40px 35px;
    box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;
  }
`

const LayoutInput = styled.div`
  position: relative;
  @media (${media.desktop}) {
    margin-top: 40px;
  }
`

const LayoutFoot = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }
`

const ErrorText = styled(BasicText)`
  position: absolute;
  left: 0;
  @media (${media.desktop}) {
    bottom: -25px;
  }
`