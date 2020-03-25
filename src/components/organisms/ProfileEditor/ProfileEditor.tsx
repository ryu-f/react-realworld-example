import * as React from 'react'

import { BasicButton } from '@/components/atoms/Button'
import { BasicText } from '@/components/atoms/Text'
import { InputText } from '@/components/atoms/InputText'
import { TextArea } from '@/components/atoms/TextArea'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

type Props = {
  email: string
  username: string
  bio: string | null
  image: string | null
  onSubmit: (data: FormData) => void
  logout: () => void
}

type FormData = {
  email: string
  password: string
  username: string
  bio: string
  image: string
}

export const ProfileEditor: React.FC<Props> = props => {
  const { email, username, bio, image, onSubmit, logout } = props
  const { register, handleSubmit, errors } = useForm<FormData>({
    validateCriteriaMode: 'all',
    defaultValues: { email, username, bio: bio || '', image: image || '' }
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LayoutInput>
        <InputText
          type="text"
          name="image"
          id="image"
          placeholder="URL of profile picture"
          ref={register({ maxLength: { value: 500, message: 'Maxlength is 500' } })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.image && errors.image.message}
        </ErrorText>
      </LayoutInput>
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
        <TextArea
          name="bio"
          id="bio"
          placeholder="Short bio about you"
          ref={register({ maxLength: { value: 1000, message: 'Maxlength is 1000' } })}
        />
        <ErrorText size={16} textcolor="RED">
          {errors.bio && errors.bio.message}
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
          placeholder="New Password"
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
        <BasicButton size="LARGE" type="submit">
          Update
        </BasicButton>
        <BasicButton size="LARGE" type="button" layout="WARNING" onClick={logout}>
          Click here to logout.
        </BasicButton>
      </LayoutFoot>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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
