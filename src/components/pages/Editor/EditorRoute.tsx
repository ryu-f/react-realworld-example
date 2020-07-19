import * as React from 'react'

import { Editor } from './_Editor'
import { AuthRoute } from '@/components/pages/AuthRoute'

export const EditorRoute: React.FC = () => {
  return (
    <AuthRoute>
      <Editor />
    </AuthRoute>
  )
}
