import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { ProfileEditorContainer } from '@/components/containers/ProfileEditorContainer'
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

  @media (${media.desktop}) {
    max-width: 980px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (${media.mobile}) {
    padding: 0 ${vw(40)};
  }
`
