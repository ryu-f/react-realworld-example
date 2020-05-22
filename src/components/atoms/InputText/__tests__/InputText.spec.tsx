import * as React from 'react'

import { fireEvent, render } from '@/shared/test/util'

import { InputText } from '../'

describe('InputText', () => {
  test('入力した値が表示されているか', () => {
    const { getByRole } = render(<InputText />)
    const input = getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
