import { Article, Comment } from '@/types/domain'
import { useCallback, useState } from 'react'

import { RootState } from '@/store/rootReducer'
import { articlesAPI } from '@/services/articles'
import { commentsAPI } from '@/services/comments'
import { isError } from '@/services/isError'
import { useSelector } from 'react-redux'

export const useGetArticle = () => {
  const [article, setArticle] = useState<Article | null>(null)
  const [comments, setComments] = useState<Array<Comment>>([])
  const [isLoading, setLoading] = useState(false)
  const { token } = useSelector((state: RootState) => state.user)
  const { articles } = useSelector((state: RootState) => state.article)

  const getArticleAsync = useCallback(async (slug: string) => {
    setLoading(true)
    const findByArticle = articles.find(article => article.slug === slug)
    if (findByArticle) {
      setArticle(findByArticle)
    } else {
      const response = await articlesAPI.getArticle({ slug })
      if (!isError(response)) setArticle(response.article)
    }

    if (token) {
      const commentsResponse = await commentsAPI.get({ slug })
      if (!isError(commentsResponse)) setComments(commentsResponse.comments)
    }
    setLoading(false)
  }, [])

  return { article, comments, isLoading, getArticleAsync }
}
