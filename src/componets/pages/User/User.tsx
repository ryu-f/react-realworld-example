import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { articleOperations } from '@/store/article'
import styled from 'styled-components'

export const User: React.FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { getProfileAsync } = articleOperations.useGetProfile()

  useEffect(() => {
    if (!name) return history.push('/')
    getProfileAsync(name)
  }, [])
  return <PageWrapper></PageWrapper>
}

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
