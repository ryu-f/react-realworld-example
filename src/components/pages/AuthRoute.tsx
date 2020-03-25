import * as React from 'react'

import { Redirect, Route } from 'react-router-dom'

import { userSelectors } from '@/store/user'

export const AuthRoute: React.FC = ({ children, ...rest }) => {
  const { loggedIn } = userSelectors.useLoggedIn()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
