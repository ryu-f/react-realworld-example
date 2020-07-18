import * as React from 'react'

import { useSelector } from 'react-redux'
import { CommentList } from '@/components/organisms/CommentList'
import { RootState } from '@/store/rootReducer'

export const CommentListContainer: React.FC = () => {
  const { comments } = useSelector((state: RootState) => state.article)

  return comments.length ? <CommentList comments={comments} /> : null
}
