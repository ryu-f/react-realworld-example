import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'

export const useMaxPage = () => {
  const maxPage = useSelector((state: RootState) => {
    const { limit, count } = state.article
    const result = count / limit
    return result < 0 ? Math.ceil(result) : Math.floor(result)
  })

  return { maxPage }
}
