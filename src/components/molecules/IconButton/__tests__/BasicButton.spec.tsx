import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { FavoriteButton } from '../'

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<FavoriteButton size="BASE">Test</FavoriteButton>)
    expect(getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const handler = jest.fn()
    const { getByText } = render(
      <FavoriteButton onClick={handler} size="BASE">
        Test
      </FavoriteButton>
    )
    fireEvent.click(getByText('Test'))
    expect(handler).toHaveBeenCalled()
  })
})
