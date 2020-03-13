import * as React from 'react'

import { LoginForm } from '@/componets/organisms/LoginForm'

// import { useDispatch } from 'react-redux'

type FormData = {
  email: string
  password: string
}

export const LoginFormContainer: React.FC = () => {
  // const dispatch = useDispatch()
  const onSubmit = (data: FormData) => {
    const { email, password } = data
    console.log(email)
    console.log(password)
  }

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}
