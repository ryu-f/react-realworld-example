import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { InputText } from '../'

describe('InputText', () => {
  test('入力した値が表示されているか', () => {
    render(<InputText />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
