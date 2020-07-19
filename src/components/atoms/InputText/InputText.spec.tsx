import * as React from 'react'

import userEvent from '@testing-library/user-event'
import { InputText } from './'
import { render, screen } from 'testing-library-utils'

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
