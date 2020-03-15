import * as React from 'react'

import { RootState } from '@/store/rootReducer'
import { TagList } from '@/componets/organisms/TagList'
import { useSelector } from 'react-redux'

export const TagListContainer: React.FC = () => {
  const { tags, selectedTag } = useSelector((state: RootState) => state.article)
  const onClick = (selected: string) => console.log(selected)

  return <TagList tags={tags} selected={selectedTag} onClick={onClick} />
}
