import * as React from 'react'

import { ArticleList } from '@/components/organisms/ArticleList'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const ArticleListContainer: React.FC = () => {
  const { articles } = useSelector((state: RootState) => state.article)

  return <ArticleList articles={articles} />
}
