import * as React from 'react'

import { ArticleEditorContainer } from '@/componets/containers/ArticleEditorContainer'
import styled from 'styled-components'

export const Editor: React.FC = () => {
  return (
    <Wrapper>
      <ArticleEditorContainer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
