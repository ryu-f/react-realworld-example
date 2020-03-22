import { articlesAPI } from '@/services/articles'
import { getArticles } from '../actions'
import { isError } from '@/services/isError'
import { profilesAPI } from '@/services/profiles'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '@/store/user'

export const useGetProfile = () => {
  const { getProfile } = userActions
  const dispatch = useDispatch()

  const getProfileAsync = useCallback(
    async (username: string) => {
      const response = await Promise.all([
        articlesAPI.get({ limit: 10, offset: 0, author: username }),
        profilesAPI.get({ username })
      ])
      const articlesPayload = isError(response[0]) ? null : response[0]
      const profilePayload = isError(response[1]) ? null : response[1]
      if (articlesPayload)
        dispatch(
          getArticles({
            articles: articlesPayload.articles,
            count: articlesPayload.articlesCount,
            limit: 10,
            offset: 0,
            author: username,
            currentPage: 1
          })
        )
      if (profilePayload) dispatch(getProfile({ user: profilePayload.profile }))
    },
    [dispatch]
  )

  return { getProfileAsync }
}
