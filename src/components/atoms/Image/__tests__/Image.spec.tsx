import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'

import { Image } from '../'
import { render } from '@testing-library/react'

describe('Image', () => {
  const props = {
    src: 'https://via.placeholder.com/1',
    alt: 'altText'
  }

  test('指定した画像が表示されているか', () => {
    const { getByRole } = render(<Image {...props} />)
    expect(getByRole('img')).toHaveAttribute('src', props.src)
  })

  test('指定した属性が設定されているか', () => {
    const { getByAltText } = render(<Image {...props} />)
    expect(getByAltText(props.alt))
  })
})
