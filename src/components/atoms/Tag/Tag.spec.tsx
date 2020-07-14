import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { Tag } from './'

const targetText = 'test'

function setup() {
  const utils = render(<Tag size="BASE">{targetText}</Tag>)

  return { ...utils }
}

describe('Tag', () => {
  test('チルドレンに渡されたテキストが表示される', () => {
    setup()
    expect(screen.getByText(targetText))
  })
})
