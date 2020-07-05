import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { BasicButton } from '../'

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    render(<BasicButton size="BASE">Test</BasicButton>)
    expect(screen.getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const onClick = jest.fn()
    render(
      <BasicButton onClick={onClick} size="BASE">
        Test
      </BasicButton>
    )
    fireEvent.click(screen.getByText('Test'))
    expect(onClick).toBeCalled()
  })
})
