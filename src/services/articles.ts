import {
  Error,
  MultipleArticlesResponse,
  NewArticle,
  RequestNumber,
  SingleArticleResponse
} from '@/types/domain'

import { API } from './API'

type GetFeedRequest = RequestNumber

type GetRequest = {
  tag?: string
  author?: string
  favorited?: string
} & RequestNumber

type PostRequest = {
  title: string
  description: string
  body: string
  tagList: Array<string>
}

type GetArticleRequest = {
  slug: string
}

type UpdateRequest = {
  slug: string
} & Omit<PostRequest, 'tagList'>

type DeleteRequest = {
  slug: string
}

/**
 * Articles
 */
export const articles = {
  /**
   * Create an article. Auth is required
   */
  getFeed: (payload: GetFeedRequest) => {
    const qs = new URLSearchParams(payload as any)
    return API.request<MultipleArticlesResponse | Error>(`/articles/feed?${qs}`)
  },

  /**
   * Get most recent articles globally. Use query parameters to filter results. Auth is optional
   */
  get: (payload: GetRequest) => {
    const qs = new URLSearchParams(payload as any)
    return API.request<MultipleArticlesResponse | Error>(`/articles?${qs}`)
  },

  /**
   * Create an article. Auth is required
   */
  post: (payload: PostRequest) => {
    const body = JSON.stringify({
      article: {
        title: payload.title,
        description: payload.description,
        body: payload.body,
        tagList: payload.tagList
      }
    })
    return API.request<NewArticle | Error>('/articles', { method: 'POST', body })
  },

  /**
   * Get an article. Auth not required
   */
  getArticle: (payload: GetArticleRequest) =>
    API.request<SingleArticleResponse | Error>(`/articles/${payload.slug}`),

  /**
   * Update an article. Auth is required
   */
  update: (payload: UpdateRequest) => {
    const body = JSON.stringify({
      article: {
        title: payload.title,
        description: payload.description,
        body: payload.body
      }
    })
    return API.request<SingleArticleResponse | Error>(`/articles/${payload.slug}`, {
      method: 'PUT',
      body
    })
  },

  /**
   * Delete an article. Auth is required
   */
  delete: (payload: DeleteRequest) => {
    return API.request<Response | Error>(`/articles/${payload.slug}`, { method: 'DELETE' })
  }
}
