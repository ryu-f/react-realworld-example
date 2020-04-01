import * as React from 'react'

import { Header } from './'

export default {
  title: 'organisms|Header',
  component: Header
}

export const LoggedIn = () => <Header loggedIn={true} name="loggedIn user" currentPath="/" />

export const Logout = () => <Header loggedIn={false} name="logout user" currentPath="/" />
