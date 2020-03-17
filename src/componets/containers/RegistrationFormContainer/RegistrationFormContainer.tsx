import * as React from 'react'

import { RegistrationForm } from '@/componets/organisms/RegistrationForm'
import { userOperations } from '@/store/user'

type FormData = {
  username: string
  email: string
  password: string
  remember: boolean
}

export const RegistrationFormContainer: React.FC = () => {
  const { registrationAsync } = userOperations.useRegistration()
  const onSubmit = (data: FormData) => {
    const { username, email, password, remember } = data
    registrationAsync({ username, email, password, remember })
  }

  return <RegistrationForm onSubmit={onSubmit} />
}
