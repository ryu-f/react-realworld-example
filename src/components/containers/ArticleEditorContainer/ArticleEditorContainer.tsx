import * as React from 'react'

import { ArticleEditor } from '@/components/organisms/ArticleEditor'
import { articleOperations } from '@/store/article'

type FormData = {
  title: string
  description: string
  body: string
  tagList: Array<string>
}

export const ArticleEditorContainer: React.FC = () => {
  const { postArticleAsync } = articleOperations.usePostArticle()
  const onSubmit = (data: FormData) => {
    const { title, description, body, tagList } = data
    postArticleAsync({ title, description, body, tagList })
  }

  return <ArticleEditor onSubmit={onSubmit} />
}
