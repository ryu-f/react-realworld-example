import React, { useEffect, useRef, useState } from 'react'
import { media, vw } from '@/styles/Mixin'

import { BasicText } from '@/componets/atoms/Text'
import { COLOR } from '@/styles/Variables'
import styled from 'styled-components'

type Props = {
  currentPage: number
  pageCount: number
  marginPageDisplayed?: number
  previousLabel?: React.ReactNode
  nextLabel?: React.ReactNode
  breakLabel?: React.ReactNode
  onHandleChange: (pageNumber: number) => void
}

/**
 * @param currentPage - 現在のページ
 * @param pageCount - ページ上限
 * @param marginPageDisplayed - 現在のページから左右に表示する単位数
 * @param previousLabel - 戻るボタンに表示する内容
 * @param nextLabel - 次へボタンに表示する内容
 * @param breakLabel - 省略箇所に表示する内容
 * @param onHandleChange - クリック時のコールバック
 */
export const Pagenation: React.FC<Props> = ({
  currentPage,
  pageCount,
  marginPageDisplayed = 2,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  breakLabel = '...',
  onHandleChange
}) => {
  const [selected, setSelected] = useState(currentPage)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    onHandleChange(selected)
  }, [selected])

  const startNumber = selected - marginPageDisplayed
  const endNumber = selected + marginPageDisplayed
  const isFirstBreakDisplay = (() => selected > marginPageDisplayed + 2)()
  const isFirstPageDisplay = (() => selected > 1)()
  const isLastBreakDisplay = (() => selected < pageCount - (marginPageDisplayed + 1))()
  const IsLastPageDisplay = (() => selected < pageCount)()

  /**
   * @param index - ページ番号
   * @returns - ページボタンのjsx
   */
  const createPageButton = (index: number) => (
    <PageButton
      key={index}
      className={index === selected ? 'is-selected' : undefined}
      onClick={() => setSelected(index)}
    >
      <BasicText size={16} textcolor={index === selected ? 'BLACK' : 'HORIZON_BLUE'}>
        {index}
      </BasicText>
    </PageButton>
  )

  /**
   * @param index - ページ番号
   * @param label - ボタン内に表示する内容
   * @returns - 戻る・次へボタンのjsx
   */
  const createArrowLabel = (index: number, label: React.ReactNode) => (
    <ArrowButton onClick={() => setSelected(index)}>
      <BasicText size={16} textcolor="HORIZON_BLUE">
        {label}
      </BasicText>
    </ArrowButton>
  )

  /**
   * @param label - ボタン内に表示する内容
   * @returns - 省略記号のjsx
   */
  const createBreakLabel = (label: React.ReactNode) => (
    <BreakLabel>
      <BasicText size={16} textcolor="BLACK">
        {label}
      </BasicText>
    </BreakLabel>
  )

  /**
   * 最初の省略記号ボタン
   */
  const FirstBreak = () => (isFirstBreakDisplay ? createBreakLabel(breakLabel) : null)

  /**
   * 1ページ目ボタン
   */
  const FirstPage = () => (isFirstPageDisplay ? createPageButton(1) : null)

  /**
   * 戻るボタン
   */
  const Previous = () => (isFirstPageDisplay ? createArrowLabel(selected - 1, previousLabel) : null)

  /**
   * 最後の省略記号ボタン
   */
  const LastBreak = () => (isLastBreakDisplay ? createBreakLabel(breakLabel) : null)

  /**
   * 最後のページボタン
   */
  const LastPage = () => (IsLastPageDisplay ? createPageButton(pageCount) : null)

  /**
   * 次へボタン
   */
  const Next = () => (IsLastPageDisplay ? createArrowLabel(selected + 1, nextLabel) : null)

  /**
   * 現在のページを基に表示するページ番号のjsxの配列を作成
   */
  const items = Array.from({ length: pageCount })
    .map((_, page) => {
      page += 1
      if (
        page === selected ||
        (page < selected && page >= startNumber && page !== 1) ||
        (page > selected && page <= endNumber && page !== pageCount)
      )
        return createPageButton(page)
      return
    })
    .filter(page => page)

  return (
    <List>
      <Previous />
      <FirstPage />
      <FirstBreak />
      {items}
      <LastBreak />
      <LastPage />
      <Next />
    </List>
  )
}

const List = styled.ul`
  display: flex;
  justify-content: center;
`

const ArrowButton = styled.li`
  color: ${COLOR.HORIZON_BLUE};
  text-align: center;
  cursor: pointer;

  @media (${media.desktop}) {
    min-width: 30px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (${media.mobile}) {
    min-width: ${vw(60)};
  }
`

const BreakLabel = styled.li`
  text-align: center;

  @media (${media.desktop}) {
    min-width: 30px;
  }

  @media (${media.mobile}) {
    min-width: ${vw(60)};
  }
`

const PageButton = styled.li`
  color: ${COLOR.HORIZON_BLUE};
  text-align: center;
  cursor: pointer;

  &.is-selected {
    pointer-events: none;
    cursor: default;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (${media.desktop}) {
    min-width: 30px;
  }

  @media (${media.mobile}) {
    min-width: ${vw(60)};
  }
`
