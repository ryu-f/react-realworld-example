import React, { useCallback } from 'react'

import { LoginForm } from '@/componets/organisms/LoginForm'
import { useDispatch } from 'react-redux'

type FormData = {
  email: string
  password: string
}

export const LoginFormContainer: React.FC = () => {
  const dispatch = useDispatch()
  const onSubmit = useCallback(
    (data: FormData) => {
      const { email, password } = data
      console.log(email)
      console.log(password)
    },
    [dispatch]
  )

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}
