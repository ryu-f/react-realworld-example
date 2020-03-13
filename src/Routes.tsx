import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import { NoMatch } from '@/componets/pages/NoMatch'
import { Top } from '@/componets/pages/Top'
import { User } from '@/componets/pages/User'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Top} exact />
    <Route path="/user/:name" component={User} exact />
    <Route path="*" component={NoMatch} exact />
  </Switch>
)
