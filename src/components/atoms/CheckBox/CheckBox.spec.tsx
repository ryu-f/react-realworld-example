import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { CheckBox } from './'
import userEvent from '@testing-library/user-event'

const testText = 'Test'

function setup() {
  const onChange = jest.fn()
  const utils = render(<CheckBox>{testText}</CheckBox>)
  return { ...utils, onChange }
}

describe('CheckBox', () => {
  test('チルドレンに渡されたテキストが表示される', () => {
    setup()
    expect(screen.getByText(testText))
  })

  test('チェックボックスをクリックするとcheckedがtrueになる', () => {
    setup()
    const checkbox = screen.getByLabelText(testText) as HTMLInputElement
    expect(checkbox.checked).toBeFalsy()
    userEvent.click(checkbox)
    expect(checkbox.checked).toBeTruthy()
  })

  test('disabled属性がある場合はチェックできない', () => {
    const { rerender } = setup()
    rerender(<CheckBox disabled>{testText}</CheckBox>)
    const checkbox = screen.getByLabelText(testText) as HTMLInputElement
    userEvent.click(checkbox)
    expect(checkbox.checked).toBeFalsy()
  })
})
