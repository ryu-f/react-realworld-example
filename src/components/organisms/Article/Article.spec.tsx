import * as React from 'react'

import { render, screen } from 'testing-library-utils'

import { Article } from './'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

const props = {
  article: {
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
}

function setup() {
  const history = createMemoryHistory()
  const utils = render(
    <Router history={history}>
      <Article {...props} />
    </Router>
  )

  return { ...utils, history }
}

describe('Article', () => {
  test('READボタンクリックで記事詳細に遷移する', () => {
    const { history } = setup()
    userEvent.click(screen.getByText('READ'))
    expect(history.location.pathname).toBe(`/article/${props.article.slug}`)
  })

  test('ユーザー名クリックでユーザーページに遷移する', () => {
    const { history } = setup()
    userEvent.click(screen.getByText(props.article.author.username))
    expect(history.location.pathname).toBe(`/user/${props.article.author.username}`)
  })

  test('snapshot', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })
})
