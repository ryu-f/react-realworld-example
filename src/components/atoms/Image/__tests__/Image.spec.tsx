import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'

import { render, screen } from '@/shared/test/util'

import { Image } from '../'

describe('Image', () => {
  const props = {
    src: 'https://via.placeholder.com/1',
    alt: 'altText'
  }

  test('指定した画像が表示されているか', () => {
    render(<Image {...props} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', props.src)
  })

  test('指定した属性が設定されているか', () => {
    render(<Image {...props} />)
    expect(screen.getByAltText(props.alt))
  })
})
