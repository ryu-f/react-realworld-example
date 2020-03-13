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
  token: string
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
    return API.request('/users/login', { method: 'POST', body })
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
    return API.request('/users', { method: 'POST', body })
  },

  /**
   * Gets the currently logged-in user
   */
  get: () => API.request('/users', { method: 'GET' }),

  /**
   * Updated user information for current user
   */
  update: (payload: UpdateRequest) => {
    const body = JSON.stringify({
      user: {
        email: payload.email,
        token: payload.token,
        username: payload.username,
        bio: payload.bio,
        image: payload.image
      }
    })
    return API.request('/users', { method: 'PUT', body })
  }
}
