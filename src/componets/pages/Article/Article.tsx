import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleDetailContainer } from '@/componets/containers/ArticleDetailContainer'
import { CommentEditorContainer } from '@/componets/containers/CommentEditorContainer'
import { articleOperations } from '@/store/article'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Article: React.FC = () => {
  const history = useHistory()
  const { slug } = useParams()
  const { getSingleArticleAsync } = articleOperations.useGetSingleArticle()

  useEffect(() => {
    if (!slug) return history.push('/')
    getSingleArticleAsync(slug)
  }, [])

  return (
    <PageWrapper>
      <ArticleDetailContainer />
      <LayoutCommentEditor>
        <CommentEditorContainer />
      </LayoutCommentEditor>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
  @media (${media.desktop}) {
    padding-bottom: 100px;
  }
`

const LayoutCommentEditor = styled.div`
  @media (${media.desktop}) {
    max-width: 940px;
    margin: 80px auto 0;
  }
`
