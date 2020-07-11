import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { InputText } from './'
import userEvent from '@testing-library/user-event'

describe('InputText', () => {
  test('入力した値が表示されているか', () => {
    const targetText = 'value'
    render(<InputText />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, targetText)
    expect(input).toHaveValue(targetText)
  })
})
