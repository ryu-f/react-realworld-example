import * as React from 'react'

import { ProfileEditorContainer } from '@/componets/containers/ProfileEditorContainer'
import styled from 'styled-components'

export const Settings: React.FC = () => {
  return (
    <Wrapper>
      <ProfileEditorContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
