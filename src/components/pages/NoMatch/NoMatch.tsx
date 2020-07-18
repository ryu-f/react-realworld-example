import * as React from 'react'

import styled from 'styled-components'
import { BasicText } from '@/components/atoms/Text'

export const NoMatch: React.FC = () => (
  <Wrapper>
    <BasicText size={16}>Not Found</BasicText>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
