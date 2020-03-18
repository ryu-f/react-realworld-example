import * as React from 'react'

import { RootState } from '@/store/rootReducer'
import { TagList } from '@/componets/organisms/TagList'
import { articleOperations } from '@/store/article'
import { useSelector } from 'react-redux'

export const TagListContainer: React.FC = () => {
  const { tags, selectedTag } = useSelector((state: RootState) => state.article)
  const { getArticlesAsync } = articleOperations.useGetArticles()
  const onClick = (selected: string) => getArticlesAsync({ tag: selected })

  return <TagList tags={tags} selected={selectedTag} onClick={onClick} />
}
