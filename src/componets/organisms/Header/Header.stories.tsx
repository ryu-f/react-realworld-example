import * as React from 'react'

import { Header } from './'

export default {
  title: 'organisms|Header',
  component: Header
}

export const LoggedIn = () => <Header loggedIn={true} />

export const NotLoggedIn = () => <Header loggedIn={false} />
