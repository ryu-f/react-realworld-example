import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { BasicButton } from './'
import userEvent from '@testing-library/user-event'

const testText = 'Test'

function setup() {
  const onClick = jest.fn()
  const utils = render(<BasicButton size="BASE">{testText}</BasicButton>)
  return { ...utils, onClick }
}

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示される', () => {
    setup()
    expect(screen.getByText(testText))
  })

  test('クリックイベントが発火する', () => {
    const { rerender, onClick } = setup()
    rerender(
      <BasicButton size="BASE" onClick={onClick}>
        {testText}
      </BasicButton>
    )
    userEvent.click(screen.getByText(testText))
    expect(onClick).toBeCalled()
  })

  test('disabled属性がある場合はクリックイベントが発火しない', () => {
    const { rerender, onClick } = setup()
    rerender(
      <BasicButton size="BASE" disabled>
        {testText}
      </BasicButton>
    )
    userEvent.click(screen.getByText(testText))
    expect(onClick).not.toBeCalled()
  })
})
