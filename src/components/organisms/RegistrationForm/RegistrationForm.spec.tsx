import * as React from 'react'

import { act, fireEvent, render, screen } from '@/shared/test/util'

import { RegistrationForm } from './'
import userEvent from '@testing-library/user-event'

describe('RegistrationForm', () => {
  const setup = () => {
    const onSubmit = jest.fn()
    const utils = render(<RegistrationForm onSubmit={onSubmit} />)
    const userInput = screen.getByPlaceholderText('User name')
    const mailInput = screen.getByPlaceholderText('Email address')
    const passwordInput = screen.getByPlaceholderText('Password')
    const button = screen.getByRole('button')

    return { onSubmit, userInput, mailInput, passwordInput, button, ...utils }
  }

  describe('error', () => {
    test('入力欄空欄の時に指定したエラーメッセージが表示される', async () => {
      const { button, getByText } = setup()
      await act(async () => {
        fireEvent.submit(button)
      })
      expect(getByText('User name is required.'))
      expect(getByText('Email address is required.'))
      expect(getByText('Password is required.'))
    })

    test('メールアドレス入力欄の文字がメールアドレス形式でなかった場合に指定したエラーメッセージが表示される', async () => {
      const { mailInput, button, getByText } = setup()
      await act(async () => {
        userEvent.type(mailInput, 'aaa')
      })
      await act(async () => {
        fireEvent.submit(button)
      })
      expect(getByText('The email address appears to be incorrect.'))
    })

    test('パスワード入力欄の文字数が6文字以下だった場合に指定したエラーメッセージが表示される', async () => {
      const { passwordInput, button, getByText } = setup()
      await act(async () => {
        userEvent.type(passwordInput, 'aaa')
      })
      await act(async () => {
        fireEvent.submit(button)
      })
      expect(getByText('Minlength is 6'))
    })

    test('パスワード入力欄の文字数が99文字以上だった場合に指定したエラーメッセージが表示される', async () => {
      const { passwordInput, button, getByText } = setup()
      const textInput = () => [...Array(100)].map(() => 'a').join('')
      await act(async () => {
        userEvent.type(passwordInput, textInput())
      })
      await act(async () => {
        fireEvent.submit(button)
      })
      expect(getByText('Maxlength is 99'))
    })
  })

  describe('success', () => {
    test('送信イベントの確認', async () => {
      const { userInput, mailInput, passwordInput, button, onSubmit } = setup()
      await act(async () => {
        userEvent.type(userInput, 'user')
      })
      await act(async () => {
        userEvent.type(mailInput, 'test@test.com')
      })
      await act(async () => {
        userEvent.type(passwordInput, '123456')
      })
      await act(async () => {
        fireEvent.submit(button)
      })
      expect(onSubmit).toBeCalled()
    })
  })

  test('snapshot', () => {
    const { asFragment } = setup()
    expect(asFragment()).toMatchSnapshot()
  })
})
