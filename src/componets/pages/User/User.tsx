import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleListContainer } from '@/componets/containers/ArticleListContainer'
import { ProfileDetailContainer } from '@/componets/containers/ProfileDetailContainer'
import { articleOperations } from '@/store/article'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const User: React.FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { getProfileAsync } = articleOperations.useGetProfile()

  useEffect(() => {
    if (!name) return history.push('/')
    getProfileAsync(name)
  }, [])
  return (
    <PageWrapper>
      <ProfileDetailContainer />
      <LayoutArticle>
        <ArticleListContainer />
      </LayoutArticle>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
`

const LayoutArticle = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 750px;
    margin: 30px auto 0;
  }
`
