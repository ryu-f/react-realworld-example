import { Error, TagsResponse } from '@/types/domain'

import { API } from './API'

/**
 * Tags
 */
export const tags = {
  /**
   * Get tags. Auth not required
   */
  get: () => API.request<TagsResponse | Error>('/tags')
}
