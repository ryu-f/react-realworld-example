import * as React from 'react'

import { render, screen } from '@/shared/test/util'

import { FavoriteButton } from '.'
import userEvent from '@testing-library/user-event'

function setup() {
  const handler = jest.fn()
  const utils = render(
    <FavoriteButton onClick={handler} size="BASE">
      Test
    </FavoriteButton>
  )

  return {
    ...utils,
    handler
  }
}

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    setup()
    expect(screen.getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const { handler } = setup()
    userEvent.click(screen.getByText('Test'))
    expect(handler).toHaveBeenCalled()
  })
})
