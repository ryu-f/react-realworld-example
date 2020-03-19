import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { articleActions } from '@/store/article'
import { commentsAPI } from '@/services/comments'
import { isError } from '@/services/isError'

export const usePostComment = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { singleArticle } = useSelector((state: RootState) => state.article)
  const { getComments } = articleActions
  const dispatch = useDispatch()

  const postCommentAsync = useCallback(
    async (body: string) => {
      if (!singleArticle) return setErrorMessage('error')
      setLoading(true)
      setErrorMessage('')

      const response = await commentsAPI.post({ slug: singleArticle.slug, comment: { body } })

      if (isError(response)) {
        setLoading(false)
        return response ? setErrorMessage('error') : setErrorMessage('system Error')
      }

      const commentsResponse = await commentsAPI.get({ slug: singleArticle.slug })
      setLoading(false)
      if (!isError(commentsResponse)) dispatch(getComments({ comments: commentsResponse.comments }))
    },
    [dispatch]
  )

  return { postCommentAsync, isLoading, errorMessage }
}
