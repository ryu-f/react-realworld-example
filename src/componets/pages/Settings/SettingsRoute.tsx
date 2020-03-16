import * as React from 'react'

import { AuthRoute } from '@/componets/pages/AuthRoute'
import { Settings } from './_Settings'

export const SettingsRoute: React.FC = () => {
  return (
    <AuthRoute>
      <Settings />
    </AuthRoute>
  )
}
