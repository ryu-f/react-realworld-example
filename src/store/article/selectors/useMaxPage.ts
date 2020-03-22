import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const useMaxPage = () => {
  const maxPage = useSelector((state: RootState) => {
    const { limit, count } = state.article
    const result = count / limit
    return result < 0 ? Math.ceil(result) : Math.floor(result)
  })

  return { maxPage }
}
