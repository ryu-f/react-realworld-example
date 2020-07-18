import * as React from 'react'

import { Settings } from './_Settings'
import { AuthRoute } from '@/components/pages/AuthRoute'

export const SettingsRoute: React.FC = () => {
  return (
    <AuthRoute>
      <Settings />
    </AuthRoute>
  )
}
