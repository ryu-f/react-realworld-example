import * as React from 'react'

import { BasicText } from '@/componets/atoms/Text'
import { Tag } from '@/componets/atoms/Tag'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  tags: Array<string>
  selected: string
  onClick: (selected: string) => void
}

export const TagList: React.FC<Props> = props => {
  const { tags, onClick } = props

  return (
    <Wrapper>
      <BasicText size={14} lineHeight={1}>
        Popular Tags
      </BasicText>
      <List>
        {tags.map((tag, i) => (
          <ListItem key={i} onClick={() => onClick(tag)}>
            <Tag size="SMALL">{tag}</Tag>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  @media (${media.desktop}) {
    max-width: 1000px;
    margin: 0 auto;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (${media.desktop}) {
    margin-top: 10px;
  }
`

const ListItem = styled.li`
  @media (${media.desktop}) {
    margin: 0 3px 3px 0;
    cursor: pointer;
  }
`
