import * as actions from '../actions'

import { useCallback, useState } from 'react'

import { Profile } from '@/types/domain'
import { articlesAPI } from '@/services/articles'
import { isError } from '@/services/isError'
import { profilesAPI } from '@/services/profiles'
import { useDispatch } from 'react-redux'

export const useGetProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null)
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
          actions.getArticle({
            articles: payload.articles.articles,
            count: payload.articles.articlesCount
          })
        )
      if (payload.profile) setProfile(payload.profile)
    },
    [dispatch]
  )

  return { getProfileAsync, profile }
}
