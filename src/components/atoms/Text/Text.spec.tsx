import * as React from 'react'

import { BasicText } from './'
import { render, screen } from 'testing-library-utils'

const targetText = 'Test'

function setup() {
  const utils = render(<BasicText>{targetText}</BasicText>)
  return { ...utils }
}

describe('Text', () => {
  test('チルドレンに渡されたテキストが表示される', () => {
    setup()
    expect(screen.getByText(targetText))
  })
})
