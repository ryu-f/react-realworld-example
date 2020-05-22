import * as React from 'react'

import { BasicText } from '../'
import { render } from '@/shared/test/util'

describe('Text', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<BasicText>Test</BasicText>)
    expect(getByText('Test'))
  })
})
