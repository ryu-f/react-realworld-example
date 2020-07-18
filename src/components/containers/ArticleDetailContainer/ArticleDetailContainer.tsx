import * as React from 'react'

import { useSelector } from 'react-redux'
import { ArticleDetail } from '@/components/organisms/ArticleDetail'
import { RootState } from '@/store/rootReducer'

export const ArticleDetailContainer: React.FC = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article)

  return singleArticle ? <ArticleDetail article={singleArticle} /> : null
}
