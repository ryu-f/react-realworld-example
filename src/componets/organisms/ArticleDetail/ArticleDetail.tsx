import { BasicText, LinkText } from '@/componets/atoms/Text'

import { Article } from '@/types/domain'
import { BACKGROUND_COLOR } from '@/styles/Variables'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import React from 'react'
import { Tag } from '@/componets/atoms/Tag'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  article: Article
}

export const ArticleDetail: React.FC<Props> = props => {
  const { title, author, createdAt, description, body, tagList } = props.article

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
      <HeroView>
        <HeroViewInner>
          <BasicText size={36} textcolor="WHITE">
            {title}
          </BasicText>
          <UserArea>
            <ImageWrapper to={`/user/${author.username}`}>
              <Image src={author.image} loading="lazy" />
            </ImageWrapper>
            <UserSub>
              <UserName size={16} textcolor="WHITE" to={`/user/${author.username}`}>
                {author.username}
              </UserName>
              <BasicText size={14} textcolor="GLAY">
                {new Date(createdAt).toDateString().slice(0, -5)}
              </BasicText>
            </UserSub>
          </UserArea>
        </HeroViewInner>
      </HeroView>
      <ArticleInner>
        <Tags />
        <BasicText size={20} fontStyle="italic">
          {description}
        </BasicText>
        <LayoutBody>
          <BasicText size={18} whiteSpace="pre-wrap">
            {body}
          </BasicText>
        </LayoutBody>
      </ArticleInner>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
`

const HeroView = styled.div`
  background-color: ${BACKGROUND_COLOR.DARK_GLAY};
  @media (${media.desktop}) {
    padding: 40px 0;
  }
`

const HeroViewInner = styled.div`
  @media (${media.desktop}) {
    max-width: 940px;
    margin: 0 auto;
  }
`

const UserArea = styled.div`
  display: flex;
  align-items: center;
  @media (${media.desktop}) {
    margin-top: 30px;
  }
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

const UserSub = styled.div`
  @media (${media.desktop}) {
    margin-left: 15px;
  }
`

const UserName = styled(LinkText)`
  @media (${media.desktop}) {
    &:hover {
      text-decoration: underline;
    }
  }
`

const ArticleInner = styled.div`
  @media (${media.desktop}) {
    max-width: 940px;
    margin: 30px auto 0;
  }
`

const TagList = styled.ul`
  @media (${media.desktop}) {
    margin-top: 10px;
  }
`

const TagListItem = styled.li`
  display: inline-block;
  @media (${media.desktop}) {
    margin: 0 5px 5px 0;
  }
`

const LayoutBody = styled.div`
  @media (${media.desktop}) {
    margin-top: 50px;
  }
`
