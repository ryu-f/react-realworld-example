import * as React from 'react'

import { AuthRoute } from '@/components/pages/AuthRoute'
import { Editor } from './_Editor'

export const EditorRoute: React.FC = () => {
  return (
    <AuthRoute>
      <Editor />
    </AuthRoute>
  )
}
