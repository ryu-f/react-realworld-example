import * as actions from '../actions'

import { articlesAPI } from '@/services/articles'
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
      const payload = {
        articles: isError(response[0]) ? null : response[0],
        profile: isError(response[1]) ? null : response[1]
      }
      if (payload.articles)
        dispatch(
          actions.getArticles({
            articles: payload.articles.articles,
            count: payload.articles.articlesCount
          })
        )
      if (payload.profile) dispatch(getProfile({ user: payload.profile.profile }))
    },
    [dispatch]
  )

  return { getProfileAsync }
}
