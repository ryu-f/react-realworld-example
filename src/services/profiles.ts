import { Error, Profile } from '@/types/domain'

import { API } from './API'

type GetRequest = {
  username: string
}

type FollowRequest = {
  username: string
}

type UnfollowRequest = {
  username: string
}

/**
 * Profile
 */
export const profilesAPI = {
  /**
   * Get a profile of a user of the system. Auth is optional
   */
  get: (payload: GetRequest) => {
    const { username } = payload
    return API.request<Profile | Error>(`/profiles/${username}`)
  },

  /**
   * Follow a user by username
   */
  follow: (payload: FollowRequest) => {
    const { username } = payload
    return API.request<Profile | Error>(`/profiles/${username}/follow`, { method: 'POST' })
  },

  /**
   * Follow a user by username
   */
  unFollow: (payload: UnfollowRequest) => {
    const { username } = payload
    return API.request<Profile | Error>(`/profiles/${username}/follow`, { method: 'DELETE' })
  }
}
