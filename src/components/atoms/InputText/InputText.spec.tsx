import * as React from 'react'

import { render, screen } from '@/shared/test/util'

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
