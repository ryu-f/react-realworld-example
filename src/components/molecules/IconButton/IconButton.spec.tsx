import * as React from 'react'

import userEvent from '@testing-library/user-event'
import { FavoriteButton } from '.'
import { render, screen } from 'testing-library-utils'

function setup() {
  const onClick = jest.fn()
  const utils = render(<FavoriteButton size="BASE">Test</FavoriteButton>)

  return {
    ...utils,
    onClick
  }
}

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されている', () => {
    setup()
    expect(screen.getByText('Test'))
  })

  test('クリックイベントが発火している', () => {
    const { onClick, rerender } = setup()
    rerender(
      <FavoriteButton size="BASE" onClick={onClick}>
        Test
      </FavoriteButton>
    )
    userEvent.click(screen.getByText('Test'))
    expect(onClick).toHaveBeenCalled()
  })
})
