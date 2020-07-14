import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { BasicButton } from './'
import userEvent from '@testing-library/user-event'

function setup() {
  const onClick = jest.fn()
  const utils = render(
    <BasicButton onClick={onClick} size="BASE">
      Test
    </BasicButton>
  )
  return { ...utils, onClick }
}

describe('BasicButton', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    setup()
    expect(screen.getByText('Test'))
  })

  test('クリックイベントが発火しているか', () => {
    const { onClick } = setup()
    userEvent.click(screen.getByText('Test'))
    expect(onClick).toBeCalled()
  })
})
