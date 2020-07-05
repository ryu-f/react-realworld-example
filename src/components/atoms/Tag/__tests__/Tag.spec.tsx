import * as React from 'react'

import { render, screen } from '@/shared/test/util'

import { Tag } from '../'

describe('Tag', () => {
  test('チルドレンに渡されたテキストが表示されているか', () => {
    render(<Tag size="BASE">Test</Tag>)
    expect(screen.getByText('Test'))
  })
})
