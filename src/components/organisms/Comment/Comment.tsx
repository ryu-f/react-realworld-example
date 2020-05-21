import * as React from 'react'

import { BasicText, LinkText } from '@/components/atoms/Text'
import { media, vw } from '@/styles/Mixin'

import { Comment as CommentType } from '@/types/domain'
import { Image } from '@/components/atoms/Image'
import styled from 'styled-components'

type Props = {
  comment: CommentType
}

export const Comment: React.FC<Props> = props => {
  const { author, body, createdAt } = props.comment

  return (
    <Wrapper>
      <LayoutBody>
        <BasicText size={14} whiteSpace="pre-wrap">
          {body}
        </BasicText>
      </LayoutBody>
      <LayoutCaption>
        <ImageWrapper>
          <Image src={author.image} />
        </ImageWrapper>
        <UserText to={`/user/${author.username}`} size={14} textcolor="horizonBlue">
          {author.username}
        </UserText>
        <CreatedAtText size={13} textcolor="gray">
          {new Date(createdAt).toDateString().slice(0, -5)}
        </CreatedAtText>
      </LayoutCaption>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.border.whiteGray};
`

const LayoutBody = styled.div`
  @media (${media.desktop}) {
    padding: 20px;
  }

  @media (${media.mobile}) {
    padding: ${vw(20)} ${vw(40)};
  }
`

const LayoutCaption = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.background.whiteGray};

  @media (${media.desktop}) {
    padding: 20px 40px;
  }

  @media (${media.mobile}) {
    padding: ${vw(20)} ${vw(40)};
  }
`

const ImageWrapper = styled.div`
  display: block;
  flex-shrink: 0;
  clip-path: circle(50%);
  object-fit: cover;

  @media (${media.desktop}) {
    width: 20px;
    height: 20px;
  }

  @media (${media.mobile}) {
    width: ${vw(40)};
    height: ${vw(40)};
  }
`

const UserText = styled(LinkText)`
  @media (${media.desktop}) {
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (${media.mobile}) {
    margin-left: ${vw(10)};
  }
`

const CreatedAtText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-left: 5px;
  }

  @media (${media.mobile}) {
    margin-left: ${vw(10)};
  }
`
