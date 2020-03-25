import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { BasicButton } from '../'

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<BasicButton size="BASE">Test</BasicButton>)
    expect(getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const handler = jest.fn()
    const { getByText } = render(
      <BasicButton onClick={handler} size="BASE">
        Test
      </BasicButton>
    )
    fireEvent.click(getByText('Test'))
    expect(handler).toHaveBeenCalled()
  })
})
