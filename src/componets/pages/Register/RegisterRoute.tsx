import * as React from 'react'

import { Register } from './_Register'
import { UnregistedRoute } from '@/componets/pages/UnregistedRoute'

export const RegisterRoute: React.FC = () => {
  return (
    <UnregistedRoute>
      <Register />
    </UnregistedRoute>
  )
}
