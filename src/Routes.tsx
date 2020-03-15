import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import { LoginRoute } from '@/componets/pages/Login'
import { NoMatch } from '@/componets/pages/NoMatch'
import { RegisterRoute } from '@/componets/pages/Register'
import { Top } from '@/componets/pages/Top'
import { User } from '@/componets/pages/User'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Top} exact />
    <Route path="/login" component={LoginRoute} exact />
    <Route path="/register" component={RegisterRoute} exact />
    <Route path="/user/:name" component={User} exact />
    <Route path="*" component={NoMatch} exact />
  </Switch>
)
