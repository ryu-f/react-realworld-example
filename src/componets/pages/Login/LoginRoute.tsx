import * as React from 'react'

import { Login } from './_Login'
import { UnregistedRoute } from '@/componets/pages/UnregistedRoute'

export const LoginRoute: React.FC = () => {
  return (
    <UnregistedRoute>
      <Login />
    </UnregistedRoute>
  )
}
