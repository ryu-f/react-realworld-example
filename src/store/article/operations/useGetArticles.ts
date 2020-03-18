import * as actions from '../actions'

import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { articlesAPI } from '@/services/articles'
import { isError } from '@/services/isError'

type Request = {
  limit?: number
  offset?: number
  tag?: string
  author?: string
  favorited?: string
}

export const useGetArticles = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {
    limit: stateLimit,
    offset: stateOffset,
    authorQuery,
    tagQuery,
    favoritedQuery
  } = useSelector((state: RootState) => state.article)
  const dispatch = useDispatch()
  const { getArticles } = actions

  const getArticlesAsync = useCallback(
    async (data: Request) => {
      const { limit, offset, tag, author, favorited } = data
      const payload = {
        limit: limit || stateLimit,
        offset: offset || stateOffset,
        author: author || authorQuery,
        tag: tag || tagQuery,
        favorited: favorited || favoritedQuery
      }

      setLoading(true)
      setErrorMessage('')
      const response = await articlesAPI.get(payload)
      setLoading(false)

      if (isError(response)) {
        return response ? setErrorMessage('error') : setErrorMessage('system Error')
      }

      dispatch(
        getArticles({
          ...payload,
          articles: response.articles,
          count: response.articlesCount
        })
      )
    },
    [dispatch]
  )

  return { getArticlesAsync, isLoading, errorMessage }
}
