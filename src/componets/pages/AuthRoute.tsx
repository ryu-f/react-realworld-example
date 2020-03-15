import * as React from 'react'

import { Redirect, Route } from 'react-router-dom'

import { RootState } from '@/store/rootReducer'
import { useSelector } from 'react-redux'

export const AuthRoute: React.FC = ({ children, ...rest }) => {
  const { token } = useSelector((state: RootState) => state.user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
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
