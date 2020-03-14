import { Error } from '@/types/domain'

export const isError = (response: any): response is Error => {
  return response.error !== undefined
}
