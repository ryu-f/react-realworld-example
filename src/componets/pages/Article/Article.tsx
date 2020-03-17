import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleDetail } from '@/componets/organisms/ArticleDetail'
import { articleOperations } from '@/store/article'
import styled from 'styled-components'

export const Article: React.FC = () => {
  const history = useHistory()
  const { slug } = useParams()
  const { article, comments, getArticleAsync } = articleOperations.useGetArticle()

  useEffect(() => {
    if (!slug) return history.push('/')
    getArticleAsync(slug)
  }, [])
  return <PageWrapper>{article ? <ArticleDetail article={article} /> : null}</PageWrapper>
}

const PageWrapper = styled.div`
  min-height: 100vh;
`
