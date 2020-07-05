import * as React from 'react'

import { render, screen } from '@/shared/test/util'

import { BasicText } from './'

describe('Text', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    render(<BasicText>Test</BasicText>)
    expect(screen.getByText('Test'))
  })
})
