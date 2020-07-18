import * as React from 'react'

import { useSelector } from 'react-redux'
import { ArticleList } from '@/components/organisms/ArticleList'
import { RootState } from '@/store/rootReducer'

export const ArticleListContainer: React.FC = () => {
  const { articles } = useSelector((state: RootState) => state.article)

  return <ArticleList articles={articles} />
}
