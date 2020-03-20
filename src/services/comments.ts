import { Error, MultipleCommentsResponse, NewCommentRequest } from '@/types/domain'

import { API } from './API'

type GetRequest = {
  slug: string
}

type PostRequest = {
  slug: string
} & NewCommentRequest

type DeleteRequest = {
  slug: string
  id: number
}

/**
 * Comments
 */
export const commentsAPI = {
  /**
   * Get the comments for an article. Auth is optional
   */
  get: (payload: GetRequest) => {
    const { slug } = payload
    return API.request<MultipleCommentsResponse | Error>(`/articles/${slug}/comments`, {
      method: 'GET'
    })
  },

  /**
   * Create a comment for an article. Auth is required
   */
  post: (payload: PostRequest) => {
    const { slug, comment } = payload
    const body = JSON.stringify({ comment })
    return API.request<MultipleCommentsResponse | Error>(`/articles/${slug}/comments`, {
      method: 'POST',
      body
    })
  },

  /**
   * Delete a comment for an article. Auth is required
   */
  delete: (payload: DeleteRequest) => {
    const { slug, id } = payload
    return API.request<Response | Error>(`/articles/${slug}/comments/${id}`, { method: 'DELETE' })
  }
}
