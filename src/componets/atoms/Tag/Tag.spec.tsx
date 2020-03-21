import * as React from 'react'

import { Tag } from './'
import { render } from '@testing-library/react'

describe('Tag', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(<Tag size="BASE">Test</Tag>)
    expect(getByText('Test'))
  })
})
