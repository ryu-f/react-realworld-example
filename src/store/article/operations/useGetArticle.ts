import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Comment } from '@/types/domain'
import { RootState } from '@/store/rootReducer'
import { articleActions } from '@/store/article'
import { articlesAPI } from '@/services/articles'
import { commentsAPI } from '@/services/comments'
import { isError } from '@/services/isError'

export const useGetArticle = () => {
  const { getSingleArticle } = articleActions
  const dipatch = useDispatch()
  const [comments, setComments] = useState<Array<Comment>>([])
  const [isLoading, setLoading] = useState(false)
  const { token } = useSelector((state: RootState) => state.user)
  const { articles } = useSelector((state: RootState) => state.article)

  const getArticlesAsync = useCallback(
    async (slug: string) => {
      setLoading(true)
      const findByArticle = articles.find(article => article.slug === slug)
      if (findByArticle) {
        dipatch(getSingleArticle({ singleArticle: findByArticle }))
      } else {
        const response = await articlesAPI.getArticle({ slug })
        if (!isError(response)) dipatch(getSingleArticle({ singleArticle: response.article }))
      }

      if (token) {
        const commentsResponse = await commentsAPI.get({ slug })
        if (!isError(commentsResponse)) setComments(commentsResponse.comments)
      }
      setLoading(false)
    },
    [dipatch]
  )

  return { comments, isLoading, getArticlesAsync }
}
