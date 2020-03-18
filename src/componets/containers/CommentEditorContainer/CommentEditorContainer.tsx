import { CommentEditor } from '@/componets/organisms/CommentEditor'
import React from 'react'
import { RootState } from '@/store/rootReducer'
import { articleOperations } from '@/store/article'
import { useSelector } from 'react-redux'

type FormData = {
  comment: string
}

export const CommentEditorContainer: React.FC = () => {
  const { image } = useSelector((state: RootState) => state.user)
  const { postCommentAsync } = articleOperations.usePostComment()
  const onSubmit = (data: FormData) => {
    const { comment } = data
    postCommentAsync(comment)
  }

  return <CommentEditor onSubmit={onSubmit} image={image || ''} />
}
