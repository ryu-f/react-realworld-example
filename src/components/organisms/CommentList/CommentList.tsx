import React from 'react'
import styled from 'styled-components'
import { Comment } from '@/components/organisms/Comment'
import { Comment as CommentType } from '@/types/domain'
import { media } from '@/styles/Mixin'

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
