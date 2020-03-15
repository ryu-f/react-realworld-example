import * as actions from '../actions'

import { batch, useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { articles } from '@/services/articles'
import { isError } from '@/services/isError'
import { tags } from '@/services/tags'
import { useCallback } from 'react'

export const useInitialData = () => {
  const { limit, offset } = useSelector((state: RootState) => state.article)
  const dispatch = useDispatch()

  const initialDataAsync = useCallback(async () => {
    const response = await Promise.all([articles.get({ limit, offset }), tags.get()])
    const payload = {
      articles: isError(response[0]) ? null : response[0],
      tags: isError(response[1]) ? null : response[1]
    }
    batch(() => {
      if (payload.articles)
        dispatch(
          actions.getArticle({
            articles: payload.articles.articles,
            count: payload.articles.articlesCount
          })
        )
      if (payload.tags) dispatch(actions.getTags(payload.tags))
    })
  }, [dispatch])

  return { initialDataAsync }
}
