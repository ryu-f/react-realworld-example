import * as React from 'react'

import { BACKGROUND_COLOR, BORDER_COLOR } from '@/styles/Variables'
import { BasicText, LinkText } from '@/componets/atoms/Text'

import { Article as ArticleType } from '@/types/domain'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import { LinkButton } from '@/componets/atoms/Button'
import { Tag } from '@/componets/atoms/Tag'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useReadingTime } from '@/hooks/useReadingTime'

type Props = {
  article: ArticleType
}

export const Article: React.FC<Props> = props => {
  const {
    title,
    description,
    slug,
    body,
    tagList,
    author,
    favorited,
    favoritesCount
  } = props.article
  const { readingTime } = useReadingTime(body)

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
    <Wrapper>
      <Primary>
        <ImageWrapper to={`/user/${author.username}`}>
          <Image src={author.image} loading="lazy" />
        </ImageWrapper>
        <Detail>
          <TitleText size={20} weight="bold">
            {title}
          </TitleText>
          <DescriptionText size={14}>{description}</DescriptionText>
          <Tags />
          <UserText to={`/user/${author.username}`} size={16} textcolor="DARK_GLAY">
            {author.username}
          </UserText>
        </Detail>
      </Primary>
      <Secondary>
        <DescriptionText size={14}>{`${readingTime} min read`}</DescriptionText>
        <LinkButton to={`/article/${slug}`} size="SMALL">
          READ
        </LinkButton>
      </Secondary>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  border: 1px solid ${BORDER_COLOR.SILVER};
  border-radius: 5px;
  box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;
  @media (${media.desktop}) {
    padding: 10px;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background-color: ${BACKGROUND_COLOR.SILVER};
    }
  }
`

const Primary = styled.div`
  display: flex;
`

const ImageWrapper = styled(Link)`
  display: block;
  flex-shrink: 0;
  clip-path: circle(50%);
  object-fit: cover;
  @media (${media.desktop}) {
    width: 40px;
    height: 40px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.3;
    }
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

const UserText = styled(LinkText)`
  @media (${media.desktop}) {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (${media.mobile}) {
    text-decoration: underline;
  }
`

const Secondary = styled.div`
  display: flex;
`
