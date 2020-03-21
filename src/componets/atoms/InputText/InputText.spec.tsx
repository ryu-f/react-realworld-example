import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { InputText } from './'

describe('InputText', () => {
  test('入力した値が表示されているか', () => {
    const { getByTestId } = render(<InputText data-testid="input" />)
    const input = getByTestId('input') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
