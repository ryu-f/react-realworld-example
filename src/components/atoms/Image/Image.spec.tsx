import * as React from 'react'

import { Image } from './'
import { render, screen } from 'testing-library-utils'

const props = {
  src: 'https://via.placeholder.com/1',
  alt: 'altText'
}

function setup() {
  const utils = render(<Image {...props} />)

  return { ...utils }
}

describe('Image', () => {
  test('指定した画像が表示される', () => {
    setup()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.src)
  })

  test('altのpropsが無くても空のalt属性が設定されている', () => {
    const { rerender } = setup()
    rerender(<Image src={props.src} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', '')
  })

  test('指定した属性が設定されている', () => {
    setup()
    expect(screen.getByAltText(props.alt))
  })
})
