import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleListContainer } from '@/componets/containers/ArticleListContainer'
import { ProfileDetail } from '@/componets/organisms/ProfileDetail'
import { RootState } from '@/store/rootReducer'
import { articleOperations } from '@/store/article'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const User: React.FC = () => {
  const { name } = useParams()
  const history = useHistory()
  const { username } = useSelector((state: RootState) => state.user)
  const { getProfileAsync, profile } = articleOperations.useGetProfile()

  useEffect(() => {
    if (!name) return history.push('/')
    getProfileAsync(name)
  }, [])
  return (
    <PageWrapper>
      {profile && <ProfileDetail myname={username} profile={profile} />}
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
  }
`
