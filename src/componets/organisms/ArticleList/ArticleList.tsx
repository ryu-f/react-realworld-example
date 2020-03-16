import * as React from 'react'

import { Article } from '@/componets/organisms/Article'
import { Article as ArticleType } from '@/types/domain'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  articles: Array<ArticleType>
}

export const ArticleList: React.FC<Props> = props => {
  const { articles } = props

  return (
    <Wrapper>
      {articles.map((article, i) => (
        <ArticleItem key={`${article.slug}-${i}`}>
          <Article article={article} />
        </ArticleItem>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  width: 100%;
`

const ArticleItem = styled.li`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  &:first-child {
    margin-top: 0;
  }
`
