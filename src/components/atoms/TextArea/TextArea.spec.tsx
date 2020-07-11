import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { TextArea } from './'

// import userEvent from '@testing-library/user-event'

describe('TextArea', () => {
  test('入力した値が表示されているか', async () => {
    const targetText = 'test'
    render(<TextArea />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: targetText } })
    // await userEvent.type(input, targetText, { delay: 1000 })
    // TODO valueがshuffleされてしまうのでfireEventを止む無く使用
    expect(input).toHaveValue(targetText)
  })
})
