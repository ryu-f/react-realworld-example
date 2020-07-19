import { API } from './API'
import { Error, TagsResponse } from '@/types/domain'

/**
 * Tags
 */
export const tags = {
  /**
   * Get tags. Auth not required
   */
  get: () => API.request<TagsResponse | Error>('/tags', { method: 'GET' })
}
