import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { FavoriteButton } from '../'

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    render(<FavoriteButton size="BASE">Test</FavoriteButton>)
    expect(screen.getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const handler = jest.fn()
    render(
      <FavoriteButton onClick={handler} size="BASE">
        Test
      </FavoriteButton>
    )
    fireEvent.click(screen.getByText('Test'))
    expect(handler).toHaveBeenCalled()
  })
})
