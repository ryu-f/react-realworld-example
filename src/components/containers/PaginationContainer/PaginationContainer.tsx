import * as React from 'react'

import { articleOperations, articleSelectors } from '@/store/article'

import { Pagination } from '@/components/organisms/Pagination'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const PaginationContainer: React.FC = () => {
  const { currentPage } = useSelector((state: RootState) => state.article)
  const { maxPage } = articleSelectors.useMaxPage()
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onHandleChange = (pageNumber: number) => {
    window.scrollTo(0, 0)
    getArticlesAsync({ nextPage: pageNumber })
  }

  return (
    <Pagination
      currentPage={currentPage}
      pageCount={maxPage}
      previousLabel="<"
      nextLabel=">"
      onHandleChange={onHandleChange}
    />
  )
}
