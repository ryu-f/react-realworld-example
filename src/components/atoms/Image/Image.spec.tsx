import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { Image } from './'

const props = {
  src: 'https://via.placeholder.com/1',
  alt: 'altText'
}

function setup() {
  render(<Image {...props} />)
}

describe('Image', () => {
  setup()
  test('指定した画像が表示されているか', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', props.src)
  })

  test('指定した属性が設定されているか', () => {
    setup()
    expect(screen.getByAltText(props.alt))
  })
})
