import * as React from 'react'

import { Article as ArticleType } from '@/types/domain'
import { BORDER_COLOR } from '@/styles/Variables'
import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  article: ArticleType
}

export const Article: React.FC<Props> = props => {
  const { article } = props

  return (
    <Wrapper>
      <UserLink to={`/user/${article.author.username}`}>
        <ImageWrapper>
          <Image src={article.author.image} />
        </ImageWrapper>
        <UserDetail>
          <TitleText size={18}>{article.title}</TitleText>
          <DescriptionText size={14}>{article.description}</DescriptionText>
        </UserDetail>
      </UserLink>
      <UserText size={16}>{article.author.username}</UserText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${BORDER_COLOR.SILVER};
  border-radius: 5px;
  @media (${media.desktop}) {
    padding: 10px;
  }
`

const UserLink = styled(Link)`
  display: flex;
`
const ImageWrapper = styled.div`
  flex-shrink: 0;
  clip-path: circle(50%);
  object-fit: cover;
  @media (${media.desktop}) {
    width: 40px;
    height: 40px;
  }
`

const UserDetail = styled.div``

const UserText = styled(BasicText)``

const TitleText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-top: 10px;
  }
`

const DescriptionText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-top: 10px;
  }
`
