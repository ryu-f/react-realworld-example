import * as React from 'react'

import { AuthRoute } from '@/components/pages/AuthRoute'
import { Settings } from './_Settings'

export const SettingsRoute: React.FC = () => {
  return (
    <AuthRoute>
      <Settings />
    </AuthRoute>
  )
}
