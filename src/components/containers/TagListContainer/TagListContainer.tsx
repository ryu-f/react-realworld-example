import * as React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootReducer'
import { TagList } from '@/components/organisms/TagList'
import { articleOperations } from '@/store/article'

export const TagListContainer: React.FC = () => {
  const { tags, tagQuery } = useSelector((state: RootState) => state.article)
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onClick = (selected: string) => getArticlesAsync({ tag: selected })

  return <TagList tags={tags} selected={tagQuery} onClick={onClick} />
}
