import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ArticleListContainer } from '@/componets/containers/ArticleListContainer'
import { PagenationContainer } from '@/componets/containers/PagenationContainer'
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
    <Wrapper>
      <ProfileDetailContainer />
      <LayoutArticle>
        <ArticleListContainer />
        <LayoutPagenation>
          <PagenationContainer />
        </LayoutPagenation>
      </LayoutArticle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  @media (${media.desktop}) {
    padding-bottom: 100px;
  }
`

const LayoutArticle = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 790px;
    padding: 0 20px;
    margin: 30px auto 0;
  }
`

const LayoutPagenation = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }
`
