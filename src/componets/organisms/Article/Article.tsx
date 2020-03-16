import * as React from 'react'

import { BasicText, LinkText } from '@/componets/atoms/Text'

import { Article as ArticleType } from '@/types/domain'
import { BORDER_COLOR } from '@/styles/Variables'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import { Tag } from '@/componets/atoms/Tag'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  article: ArticleType
}

export const Article: React.FC<Props> = props => {
  const { title, description, slug, tagList, author } = props.article

  const Tags = () =>
    tagList.length ? (
      <TagList>
        {tagList.map((tag, i) => (
          <TagListItem key={i}>
            <Tag size="BASE">{tag}</Tag>
          </TagListItem>
        ))}
      </TagList>
    ) : null

  return (
    <Wrapper to={`/article/${slug}`}>
      <Primary>
        <ImageWrapper>
          <Image src={author.image} loading="lazy" />
        </ImageWrapper>
        <Detail>
          <TitleText size={20} weight="bold">
            {title}
          </TitleText>
          <DescriptionText size={14}>{description}</DescriptionText>
          <Tags />
          <UserText to={`/user/${author.username}`} size={16}>
            {author.username}
          </UserText>
        </Detail>
      </Primary>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  display: block;
  width: 100%;
  border: 1px solid ${BORDER_COLOR.SILVER};
  border-radius: 5px;
  box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;
  @media (${media.desktop}) {
    padding: 10px;
  }
`

const Primary = styled.div`
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

const Detail = styled.div`
  @media (${media.desktop}) {
    margin-left: 15px;
  }
`

const TitleText = styled(BasicText)`
  &::first-line {
    line-height: 1;
  }
`

const DescriptionText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  &::first-line {
    line-height: 1;
  }
`

const TagList = styled.ul``

const TagListItem = styled.li`
  display: inline-block;
  @media (${media.desktop}) {
    margin: 0 5px 5px 0;
  }
`

const UserText = styled(LinkText)``
