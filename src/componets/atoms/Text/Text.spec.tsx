import * as React from 'react'

import { BasicText } from './'
import { render } from '@testing-library/react'

describe('Text', () => {
  const size = 'BASE'
  const textcolor = 'BLACK'

  test('チルドレンに渡されたテキストが表示されているか', () => {
    const { getByText } = render(
      <BasicText size={size} textcolor={textcolor}>
        Test
      </BasicText>
    )
    expect(getByText('Test'))
  })
})
