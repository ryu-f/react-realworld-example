import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { media, vw } from '@/styles/Mixin'

import { ArticleListContainer } from '@/components/containers/ArticleListContainer'
import { Pagination } from '@/components/organisms/Pagination'
import { ProfileDetailContainer } from '@/components/containers/ProfileDetailContainer'
import { articleOperations } from '@/store/article'

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
        <LayoutPagination>
          <Pagination previousLabel="<" nextLabel=">" />
        </LayoutPagination>
      </LayoutArticle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  @media (${media.desktop}) {
    padding-bottom: 100px;
  }

  @media (${media.mobile}) {
    padding-bottom: ${vw(200)};
  }
`

const LayoutArticle = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 790px;
    padding: 0 20px;
    margin: 30px auto 0;
  }

  @media (${media.mobile}) {
    padding: 0 ${vw(40)};
    margin-top: ${vw(60)};
  }
`

const LayoutPagination = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(60)};
  }
`
