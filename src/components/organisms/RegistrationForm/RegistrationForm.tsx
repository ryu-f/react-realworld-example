import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { BasicButton } from '@/components/atoms/Button'
import { BasicText } from '@/components/atoms/Text'
import { CheckBox } from '@/components/atoms/CheckBox'
import { InputText } from '@/components/atoms/InputText'
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
        <ErrorText size={16} textcolor="warning">
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
        <ErrorText size={16} textcolor="warning">
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
        <ErrorText size={16} textcolor="warning">
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
  background-color: ${props => props.theme.background.base};
  border-radius: 5px;
  box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;

  @media (${media.desktop}) {
    padding: 40px 40px 35px;
  }

  @media (${media.mobile}) {
    padding: ${vw(80)} ${vw(80)} ${vw(70)};
  }
`

const LayoutInput = styled.div`
  position: relative;

  @media (${media.desktop}) {
    margin-top: 40px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(80)};
  }
`

const LayoutFoot = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(60)};
  }
`

const ErrorText = styled(BasicText)`
  position: absolute;
  left: 0;

  @media (${media.desktop}) {
    bottom: -25px;
  }

  @media (${media.mobile}) {
    bottom: ${vw(-50)};
  }
`
