import * as React from 'react'

import { BasicText } from '../'
import { render } from '@testing-library/react'

describe('Text', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<BasicText>Test</BasicText>)
    expect(getByText('Test'))
  })
})
