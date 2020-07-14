import { BasicText, LinkText } from '@/components/atoms/Text'
import { media, vw } from '@/styles/Mixin'

import { Article } from '@/types/domain'
import { Image } from '@/components/atoms/Image'
import { Link } from 'react-router-dom'
import React from 'react'
import { Tag } from '@/components/atoms/Tag'
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
            <Tag size="LARGE">{tag}</Tag>
          </TagListItem>
        ))}
      </TagList>
    ) : null

  return (
    <Wrapper>
      <HeroView>
        <HeroViewInner>
          <BasicText size={36} textcolor="strong">
            {title}
          </BasicText>
          <UserArea>
            <ImageWrapper to={`/user/${author.username}`}>
              <Image src={author.image} loading="lazy" />
            </ImageWrapper>
            <UserSub>
              <UserName size={16} textcolor="strong" to={`/user/${author.username}`}>
                {author.username}
              </UserName>
              <BasicText size={14} textcolor="gray">
                {new Date(createdAt).toDateString().slice(0, -5)}
              </BasicText>
            </UserSub>
          </UserArea>
        </HeroViewInner>
      </HeroView>
      <ArticleInner>
        <Tags />
        <LayoutDescription>
          <BasicText size={20} fontStyle="italic">
            {description}
          </BasicText>
        </LayoutDescription>
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
  background-color: ${props => props.theme.background.darkGray};

  @media (${media.desktop}) {
    padding: 40px 20px;
  }

  @media (${media.mobile}) {
    padding: ${vw(80)} ${vw(40)};
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

  @media (${media.mobile}) {
    margin-top: ${vw(30)};
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

  @media (${media.mobile}) {
    width: ${vw(80)};
    height: ${vw(80)};
  }
`

const UserSub = styled.div`
  @media (${media.desktop}) {
    margin-left: 15px;
  }

  @media (${media.mobile}) {
    margin-left: ${vw(30)};
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
  width: 100%;

  @media (${media.desktop}) {
    max-width: 1000px;
    padding: 0 20px;
    margin: 30px auto 0;
  }

  @media (${media.mobile}) {
    padding: 0 ${vw(40)};
    margin-top: ${vw(60)};
  }
`

const TagList = styled.ul`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(20)};
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

const LayoutDescription = styled.div`
  @media (${media.desktop}) {
    margin-top: 30px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(60)};
  }
`

const LayoutBody = styled.div`
  @media (${media.desktop}) {
    margin-top: 50px;
  }

  @media (${media.mobile}) {
    margin-top: ${vw(50)};
  }
`
