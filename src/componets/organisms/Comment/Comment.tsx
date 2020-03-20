import * as React from 'react'

import { BACKGROUND_COLOR, BORDER_COLOR } from '@/styles/Variables'
import { BasicText, LinkText } from '@/componets/atoms/Text'

import { Comment as CommentType } from '@/types/domain'
import { Image } from '@/componets/atoms/Image'
import { media } from '@/styles/Mixin'
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
        <UserText to={`/user/${author.username}`} size={14} textcolor="HORIZON_BLUE">
          {author.username}
        </UserText>
        <CreatedAtText size={13} textcolor="GLAY">
          {new Date(createdAt).toDateString().slice(0, -5)}
        </CreatedAtText>
      </LayoutCaption>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  border: 1px solid ${BORDER_COLOR.WHITE_GLAY};
`

const LayoutBody = styled.div`
  @media (${media.desktop}) {
    padding: 20px;
  }
`

const LayoutCaption = styled.div`
  display: flex;
  align-items: center;
  background-color: ${BACKGROUND_COLOR.WHITE_GLAY};
  @media (${media.desktop}) {
    padding: 10px 20px;
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
`

const UserText = styled(LinkText)`
  @media (${media.desktop}) {
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`

const CreatedAtText = styled(BasicText)`
  @media (${media.desktop}) {
    margin-left: 5px;
  }
`
