import * as React from 'react'

import { BasicText } from '@/componets/atoms/Text'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export const User: React.FC = () => {
  const { name } = useParams()

  return (
    <PageWrapper>
      <BasicText size={16} textcolor="BLACK">
        by {name}
      </BasicText>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: block;
`
