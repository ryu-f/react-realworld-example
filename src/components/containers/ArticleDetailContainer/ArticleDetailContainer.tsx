import * as React from 'react'

import { ArticleDetail } from '@/components/organisms/ArticleDetail'
import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const ArticleDetailContainer: React.FC = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article)

  return singleArticle ? <ArticleDetail article={singleArticle} /> : null
}
