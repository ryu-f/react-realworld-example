import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { BORDER_COLOR } from '@/styles/Variables'
import { BasicText } from '@/components/atoms/Text'
import { Tag } from '@/components/atoms/Tag'
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
      <LeadText size={14} lineHeight={1}>
        Popular Tags
      </LeadText>
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

const LeadText = styled(BasicText)`
  border-bottom: 1px solid ${BORDER_COLOR.SILVER};

  @media (${media.desktop}) {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  @media (${media.mobile}) {
    padding-bottom: ${vw(30)};
    margin-bottom: ${vw(30)};
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  @media (${media.desktop}) {
    margin: 0 3px 3px 0;
    cursor: pointer;
  }

  @media (${media.mobile}) {
    margin: 0 ${vw(6)} ${vw(6)} 0;
  }
`
