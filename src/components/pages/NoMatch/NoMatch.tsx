import * as React from 'react'

import { BasicText } from '@/components/atoms/Text'
import styled from 'styled-components'

export const NoMatch: React.FC = () => (
  <Wrapper>
    <BasicText size={16} textcolor="BLACK">
      Not Found
    </BasicText>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
