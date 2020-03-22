import * as React from 'react'

import { articleOperations, articleSelectors } from '@/store/article'

import { Pagenation } from '@/componets/organisms/Pagenation'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const PagenationContainer: React.FC = () => {
  const { articles, currentPage } = useSelector((state: RootState) => state.article)
  const { maxPage } = articleSelectors.useMaxPage()
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onHandleChange = (pageNumber: number) => getArticlesAsync({ nextPage: pageNumber })

  return articles.length ? (
    <Pagenation
      currentPage={currentPage}
      pageCount={maxPage}
      previousLabel="<"
      nextLabel=">"
      onHandleChange={onHandleChange}
    />
  ) : null
}
