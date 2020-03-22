import * as React from 'react'

import { MemoryRouter, Router } from 'react-router'
import { fireEvent, render } from '@testing-library/react'

import { Article } from '../'
import { createMemoryHistory } from 'history'

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

  test('READボタンクリックで記事詳細に遷移するか', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Article article={article} />
      </Router>
    )
    fireEvent.click(getByText('READ'))
    expect(history.location.pathname).toBe(`/article/${article.slug}`)
  })

  test('ユーザー名クリックでユーザーページに遷移するか', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <Article article={article} />
      </Router>
    )
    fireEvent.click(getByText(article.author.username))
    expect(history.location.pathname).toBe(`/user/${article.author.username}`)
  })

  test('snapshot', () => {
    const { asFragment } = render(<Article article={article} />, { wrapper: MemoryRouter })
    expect(asFragment()).toMatchSnapshot()
  })
})
