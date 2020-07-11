import * as React from 'react'

import { render, screen } from '@/shared/test/util'

import { CheckBox } from './'
import userEvent from '@testing-library/user-event'

function setup() {
  const utils = render(<CheckBox>Test</CheckBox>)
  return { ...utils }
}

describe('CheckBox', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    setup()
    expect(screen.getByText('Test'))
  })

  test('チェックボックスをクリックしてcheckedがtrueになっているか', () => {
    setup()
    const checkbox = screen.getByLabelText('Test') as HTMLInputElement
    userEvent.click(checkbox)
    expect(checkbox.checked).toBeTruthy()
  })
})
