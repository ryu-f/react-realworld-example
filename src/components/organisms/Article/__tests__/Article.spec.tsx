import * as React from 'react'

import { fireEvent, render, screen } from '@/shared/test/util'

import { Article } from '../'
import { Router } from 'react-router'
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
    render(
      <Router history={history}>
        <Article article={article} />
      </Router>
    )
    fireEvent.click(screen.getByText('READ'))
    expect(history.location.pathname).toBe(`/article/${article.slug}`)
  })

  test('ユーザー名クリックでユーザーページに遷移するか', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Article article={article} />
      </Router>
    )
    fireEvent.click(screen.getByText(article.author.username))
    expect(history.location.pathname).toBe(`/user/${article.author.username}`)
  })

  test('snapshot', () => {
    const { asFragment } = render(<Article article={article} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
