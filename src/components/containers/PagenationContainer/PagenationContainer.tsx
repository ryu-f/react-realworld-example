import * as React from 'react'

import { articleOperations, articleSelectors } from '@/store/article'

import { Pagenation } from '@/components/organisms/Pagenation'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const PagenationContainer: React.FC = () => {
  const { currentPage } = useSelector((state: RootState) => state.article)
  const { maxPage } = articleSelectors.useMaxPage()
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onHandleChange = (pageNumber: number) => {
    window.scrollTo(0, 0)
    getArticlesAsync({ nextPage: pageNumber })
  }

  return (
    <Pagenation
      currentPage={currentPage}
      pageCount={maxPage}
      previousLabel="<"
      nextLabel=">"
      onHandleChange={onHandleChange}
    />
  )
}
