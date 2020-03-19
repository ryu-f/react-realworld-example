import { batch, useDispatch, useSelector } from 'react-redux'
import { getArticles, getTags } from '../actions'

import { RootState } from '@/store/rootReducer'
import { articlesAPI } from '@/services/articles'
import { isError } from '@/services/isError'
import { tags } from '@/services/tags'
import { useCallback } from 'react'

export const useInitialData = () => {
  const { limit, offset } = useSelector((state: RootState) => state.article)
  const dispatch = useDispatch()

  const initialDataAsync = useCallback(async () => {
    const response = await Promise.all([articlesAPI.get({ limit, offset }), tags.get()])
    const articlesPayload = isError(response[0]) ? null : response[0]
    const tagsPayload = isError(response[1]) ? null : response[1]

    batch(() => {
      if (articlesPayload)
        dispatch(
          getArticles({
            articles: articlesPayload.articles,
            count: articlesPayload.articlesCount,
            limit,
            offset
          })
        )
      if (tagsPayload) dispatch(getTags(tagsPayload))
    })
  }, [dispatch])

  return { initialDataAsync }
}
