import React, { useEffect } from 'react'

import { ArticleListContainer } from '@/componets/containers/ArticleListContainer'
import { PagenationContainer } from '@/componets/containers/PagenationContainer'
import { TagListContainer } from '@/componets/containers/TagListContainer'
import { articleOperations } from '@/store/article'
import { media } from '@/styles/Mixin'
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
          <LayoutPagenation>
            <PagenationContainer />
          </LayoutPagenation>
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
`

const Content = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
  }
`

const LayoutArticle = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 750px;
  }
`

const LayoutPagenation = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }
`

const LayoutTagList = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 220px;
    margin-left: 20px;
  }
`
