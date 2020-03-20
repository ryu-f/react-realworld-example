import * as React from 'react'

import { CommentList } from '@/componets/organisms/CommentList'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const CommentListContainer: React.FC = () => {
  const { comments } = useSelector((state: RootState) => state.article)

  return comments.length ? <CommentList comments={comments} /> : null
}
