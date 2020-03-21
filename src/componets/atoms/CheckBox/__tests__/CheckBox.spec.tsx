import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { CheckBox } from '../'

describe('CheckBox', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<CheckBox>Test</CheckBox>)
    expect(getByText('Test'))
  })

  test('チェックボックスをクリックしてcheckedがtrueになっているか', () => {
    const { getByLabelText } = render(<CheckBox>Test</CheckBox>)
    const checkbox = getByLabelText('Test') as HTMLInputElement
    fireEvent.click(checkbox, { checked: true })
    expect(checkbox.checked).toBeTruthy()
  })
})
