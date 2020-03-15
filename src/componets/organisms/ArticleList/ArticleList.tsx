import * as React from 'react'

import { Article } from '@/componets/organisms/Article'
import { Article as ArticleType } from '@/types/domain'
// import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  articles: Array<ArticleType>
}

export const ArticleList: React.FC<Props> = props => {
  const { articles } = props

  return (
    <Wrapper>
      {articles.map((article, i) => (
        <Article key={`${article.slug}-${i}`} article={article} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
