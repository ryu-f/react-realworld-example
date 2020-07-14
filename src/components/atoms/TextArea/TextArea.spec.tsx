import * as React from 'react'

import { fireEvent, render, screen } from 'testing-library-utils'

import { TextArea } from './'

// import userEvent from '@testing-library/user-event'

function setup() {
  const utils = render(<TextArea />)
  return { ...utils }
}

describe('TextArea', () => {
  test('入力した値が表示されている', async () => {
    setup()
    const targetText = 'test'
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: targetText } })
    // await userEvent.type(input, targetText, { delay: 1000 })
    // TODO valueがshuffleされてしまうのでfireEventを止む無く使用
    expect(input).toHaveValue(targetText)
  })
})
