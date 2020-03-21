import * as React from 'react'

import { Article } from './'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'

describe('Article', () => {
  const article = {
    title: 'test',
    slug: 'test-slug',
    body: 'test-body',
    createdAt: new Date('2020-03-21T05:56:25.787Z'),
    updatedAt: new Date('2020-03-21T05:56:25.787Z'),
    tagList: ['test1', 'test2'],
    description: 'test-description',
    author: {
      username: 'test-user',
      bio: 'test-bio',
      image: 'https://via.placeholder.com/1',
      following: false
    },
    favorited: false,
    favoritesCount: 0
  }
  test('snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Article article={article} />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
