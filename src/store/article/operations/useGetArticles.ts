import { useDispatch, useSelector } from 'react-redux'

import { useCallback } from 'react'
import { getArticles } from '../actions'
import { RootState } from '@/store/rootReducer'
import { articlesAPI } from '@/services/articles'
import { isError } from '@/services/isError'

type Request = {
  nextPage?: number
  limit?: number
  tag?: string
  author?: string
  favorited?: string
}

export const useGetArticles = () => {
  const {
    limit: stateLimit,
    offset: stateOffset,
    currentPage,
    authorQuery,
    tagQuery,
    favoritedQuery
  } = useSelector((state: RootState) => state.article)
  const dispatch = useDispatch()

  const getArticlesAsync = useCallback(
    async (data: Request) => {
      const { nextPage, tag, author, favorited } = data
      const limit = data.limit || stateLimit
      const offset = nextPage ? (nextPage - 1) * limit : stateOffset
      const payload = {
        limit: limit,
        offset: offset,
        author: author || authorQuery,
        tag: tag || tagQuery,
        favorited: favorited || favoritedQuery
      }

      const response = await articlesAPI.get(payload)

      if (isError(response)) return

      dispatch(
        getArticles({
          ...payload,
          articles: response.articles,
          currentPage: nextPage || currentPage,
          count: response.articlesCount
        })
      )
    },
    [dispatch, stateLimit, stateOffset, currentPage, authorQuery, tagQuery, favoritedQuery]
  )

  return { getArticlesAsync }
}
