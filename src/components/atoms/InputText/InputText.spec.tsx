import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { InputText } from './'
import userEvent from '@testing-library/user-event'

function setup() {
  const utils = render(<InputText />)

  return { ...utils }
}

describe('InputText', () => {
  test('入力した値が表示される', () => {
    setup()
    const targetText = 'value'
    const input = screen.getByRole('textbox')
    userEvent.type(input, targetText)
    expect(input).toHaveValue(targetText)
  })
})
