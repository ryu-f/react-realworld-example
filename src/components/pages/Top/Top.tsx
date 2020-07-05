import React, { useEffect } from 'react'
import { media, vw } from '@/styles/Mixin'

import { ArticleListContainer } from '@/components/containers/ArticleListContainer'
import { PaginationContainer } from '@/components/containers/PaginationContainer'
import { TagListContainer } from '@/components/containers/TagListContainer'
import { articleOperations } from '@/store/article'
import styled from 'styled-components'

export const Top: React.FC = () => {
  const { initialDataAsync } = articleOperations.useInitialData()

  useEffect(() => {
    initialDataAsync()
  }, [])

  return (
    <Wrapper>
      <Content>
        <LayoutArticle>
          <ArticleListContainer />
          <LayoutPagination>
            <PaginationContainer />
          </LayoutPagination>
        </LayoutArticle>
        <LayoutTagList>
          <TagListContainer />
        </LayoutTagList>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    padding: 100px 20px;
  }

  @media (${media.mobile}) {
    padding: ${vw(100)} ${vw(40)} ${vw(200)};
  }
`

const Content = styled.div`
  display: flex;
  width: 100%;

  @media (${media.desktop}) {
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (${media.mobile}) {
    flex-direction: column-reverse;
  }
`

const LayoutArticle = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    max-width: 750px;
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

const LayoutTagList = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    max-width: 220px;
    margin-left: 20px;
  }
`
