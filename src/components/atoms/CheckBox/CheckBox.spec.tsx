import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { CheckBox } from './'

describe('CheckBox', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    render(<CheckBox>Test</CheckBox>)
    expect(screen.getByText('Test'))
  })

  test('チェックボックスをクリックしてcheckedがtrueになっているか', () => {
    render(<CheckBox>Test</CheckBox>)
    const checkbox = screen.getByLabelText('Test') as HTMLInputElement
    fireEvent.click(checkbox, { checked: true })
    expect(checkbox.checked).toBeTruthy()
  })
})
