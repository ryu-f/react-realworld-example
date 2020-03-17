import { Error, UserResponse } from '@/types/domain'

import { API } from './API'

type LoginRequest = {
  email: string
  password: string
}

type RegisterRequest = {
  username: string
  email: string
  password: string
}

type UpdateRequest = {
  email: string
  password: string
  username: string
  bio: string
  image: string
}

/**
 * User and Authentication
 */
export const users = {
  /**
   * Login for existing user
   */
  login: (payload: LoginRequest) => {
    const body = JSON.stringify({
      user: {
        email: payload.email,
        password: payload.password
      }
    })
    return API.request<UserResponse | Error>('/users/login', { method: 'POST', body })
  },

  /**
   * Register a new user
   */
  register: (payload: RegisterRequest) => {
    const body = JSON.stringify({
      user: {
        username: payload.username,
        email: payload.email,
        password: payload.password
      }
    })
    return API.request<UserResponse | Error>('/users', { method: 'POST', body })
  },

  /**
   * Gets the currently logged-in user
   */
  get: () => API.request<UserResponse | Error>('/user', { method: 'GET' }),

  /**
   * Updated user information for current user
   */
  update: (payload: UpdateRequest) => {
    const body = JSON.stringify({
      user: {
        email: payload.email,
        password: payload.password,
        username: payload.username,
        bio: payload.bio,
        image: payload.image
      }
    })
    return API.request<UserResponse | Error>('/user', { method: 'PUT', body })
  }
}
