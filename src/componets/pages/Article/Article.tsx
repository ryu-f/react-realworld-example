import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleDetailContainer } from '@/componets/containers/ArticleDetailContainer'
import { articleOperations } from '@/store/article'
import styled from 'styled-components'

export const Article: React.FC = () => {
  const history = useHistory()
  const { slug } = useParams()
  const { getArticlesAsync } = articleOperations.useGetArticle()

  useEffect(() => {
    if (!slug) return history.push('/')
    getArticlesAsync(slug)
  }, [])
  return (
    <PageWrapper>
      <ArticleDetailContainer />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
`
