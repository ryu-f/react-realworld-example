import * as React from 'react'

import { Login } from './_Login'
import { UnregistedRoute } from '@/components/pages/UnregistedRoute'

export const LoginRoute: React.FC = () => {
  return (
    <UnregistedRoute>
      <Login />
    </UnregistedRoute>
  )
}
