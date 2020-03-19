import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { articleActions } from '@/store/article'
import { articlesAPI } from '@/services/articles'
import { commentsAPI } from '@/services/comments'
import { isError } from '@/services/isError'
import { userSelectors } from '@/store/user'

export const useGetSingleArticle = () => {
  const { getSingleArticle, getComments } = articleActions
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const { articles } = useSelector((state: RootState) => state.article)
  const { loggedIn } = userSelectors.useLoggedIn()

  const getSingleArticleAsync = useCallback(
    async (slug: string) => {
      setLoading(true)
      const findByArticle = articles.find(article => article.slug === slug)
      if (findByArticle) {
        dispatch(getSingleArticle({ singleArticle: findByArticle }))
      } else {
        const response = await articlesAPI.getArticle({ slug })
        if (!isError(response)) dispatch(getSingleArticle({ singleArticle: response.article }))
      }

      if (loggedIn) {
        const commentsResponse = await commentsAPI.get({ slug })
        if (!isError(commentsResponse))
          dispatch(getComments({ comments: commentsResponse.comments }))
      }
      setLoading(false)
    },
    [dispatch]
  )

  return { isLoading, getSingleArticleAsync }
}
