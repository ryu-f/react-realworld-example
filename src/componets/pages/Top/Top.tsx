import React, { useEffect } from 'react'

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
    <PageWrapper>
      <Content>
        <LayoutTagList>
          <TagListContainer />
        </LayoutTagList>
      </Content>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    padding-top: 100px;
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

const LayoutTagList = styled.div`
  width: 100%;
  @media (${media.desktop}) {
    max-width: 220px;
  }
`
