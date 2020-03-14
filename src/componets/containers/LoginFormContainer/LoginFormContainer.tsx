import * as React from 'react'

import { LoginForm } from '@/componets/organisms/LoginForm'
import { userOperations } from '@/store/user'

type FormData = {
  email: string
  password: string
}

export const LoginFormContainer: React.FC = () => {
  const { loginAsync } = userOperations.useLogin()
  const onSubmit = (data: FormData) => {
    const { email, password } = data
    loginAsync({ email, password })
  }

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}
