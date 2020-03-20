import { Comment } from '@/componets/organisms/Comment'
import { Comment as CommentType } from '@/types/domain'
import React from 'react'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  comments: Array<CommentType>
}

export const CommentList: React.FC<Props> = props => {
  const { comments } = props

  return (
    <Wrapper>
      {comments.map((comment, i) => (
        <CommentItem key={`${comment.id}-${i}`}>
          <Comment comment={comment} />
        </CommentItem>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const CommentItem = styled.li`
  @media (${media.desktop}) {
    margin-top: 10px;
  }

  &:first-child {
    margin-top: 0;
  }
`
