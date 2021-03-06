import * as React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BasicText, LinkText } from '@/components/atoms/Text'
import { media, vw } from '@/styles/Mixin'

import { Article as ArticleType } from '@/types/domain'
import { FavoriteButton } from '@/components/molecules/IconButton'
import { Image } from '@/components/atoms/Image'
import { LinkButton } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { useReadingTime } from '@/shared/hooks/useReadingTime'

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
    createdAt,
    author,
    favoritesCount
  } = props.article
  const { calculateReadingTime } = useReadingTime()
  const onUserClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.stopPropagation()

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
        <ImageWrapper to={`/user/${author.username}`} onClick={onUserClick}>
          <Image src={author.image} loading="lazy" />
        </ImageWrapper>
        <LayoutTitle>
          <TitleText size={20} weight="bold">
            {title}
          </TitleText>
          <DescriptionText size={14}>{description}</DescriptionText>
          <Tags />
          <UserDateArea>
            <BasicText size={14}>by&ensp;</BasicText>
            <UserText to={`/user/${author.username}`} size={16} textcolor="gray">
              {author.username}
            </UserText>
            <BasicText size={16} textcolor="gray">
              ・{new Date(createdAt).toDateString().slice(0, -5)}
            </BasicText>
          </UserDateArea>
        </LayoutTitle>
      </Primary>
      <Secondary>
        <FavoriteButton size="BASE">{favoritesCount}</FavoriteButton>
        <MinText size={14}>{`${calculateReadingTime(body)} min read`}</MinText>
        <ReadButton to={`/article/${slug}`} size="SMALL">
          READ
        </ReadButton>
      </Secondary>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.border.silver};
  border-radius: 5px;
  box-shadow: rgba(60, 66, 87, 0.12) 0 7px 14px 0, rgba(0, 0, 0, 0.12) 0 3px 6px 0;

  @media (${media.desktop}) {
    padding: 10px;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background-color: ${props => props.theme.background.silver};
    }
  }

  @media (${media.mobile}) {
    padding: ${vw(20)};
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

  @media (${media.mobile}) {
    width: ${vw(80)};
    height: ${vw(80)};
  }
`

const LayoutTitle = styled.div`
  @media (${media.desktop}) {
    margin-left: 15px;
  }

  @media (${media.mobile}) {
    margin-left: ${vw(30)};
  }
`

const TitleText = styled(BasicText)`
  &::first-line {
    line-height: 1;
  }
`

const DescriptionText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-top: 8px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(16)};
  }

  &::first-line {
    line-height: 1;
  }
`

const UserDateArea = styled.div`
  display: flex;
  @media (${media.desktop}) {
    margin-top: 5px;
  }
`

const TagList = styled.ul`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(26)};
  }
`

const TagListItem = styled.li`
  display: inline-block;

  @media (${media.desktop}) {
    margin: 0 5px 5px 0;
  }

  @media (${media.mobile}) {
    margin: 0 ${vw(10)} ${vw(10)} 0;
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
  align-items: center;
`

const MinText = styled(BasicText)``

const ReadButton = styled(LinkButton)`
  text-align: center;

  @media (${media.desktop}) {
    width: 60px;
    height: 30px;
    padding: 6px 8px;
    margin-left: 10px;
  }

  @media (${media.mobile}) {
    width: ${vw(120)};
    height: ${vw(60)};
    padding: ${vw(12)} ${vw(19)};
    margin-left: ${vw(20)};
  }
`
