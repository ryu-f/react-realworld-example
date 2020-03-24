import React, { useCallback } from 'react'
import { media, vw } from '@/styles/Mixin'

import { Article } from '@/componets/organisms/Article'
import { Article as ArticleType } from '@/types/domain'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

type Props = {
  articles: Array<ArticleType>
}

export const ArticleList: React.FC<Props> = props => {
  const history = useHistory()
  const { articles } = props
  const onClick = useCallback(
    (slug: string) => {
      history.push(`/article/${slug}`)
    },
    [history]
  )

  return (
    <Wrapper>
      {articles.map((article, i) => (
        <ArticleItem key={`${article.slug}-${i}`} onClick={() => onClick(article.slug)}>
          <Article article={article} />
        </ArticleItem>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const ArticleItem = styled.li`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(30)};
  }

  &:first-child {
    margin-top: 0;
  }
`
