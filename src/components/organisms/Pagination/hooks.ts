import { useSelector } from 'react-redux'
import { articleOperations, articleSelectors } from '@/store/article'

import { RootState } from '@/store/rootReducer'

export const usePaginationContainer = () => {
  const { currentPage } = useSelector((state: RootState) => state.article)
  const { maxPage } = articleSelectors.useMaxPage()
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onHandleChange = (pageNumber: number) => {
    window.scrollTo(0, 0)
    getArticlesAsync({ nextPage: pageNumber })
  }

  return { currentPage, maxPage, onHandleChange }
}
