import React, { useEffect } from 'react'

import { articleOperations } from '@/store/article'
import styled from 'styled-components'

export const Top: React.FC = () => {
  const { initialDataAsync } = articleOperations.useInitialData()

  useEffect(() => {
    initialDataAsync()
  }, [])

  return <PageWrapper></PageWrapper>
}

const PageWrapper = styled.div`
  width: 100%;
`
