import * as React from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

import { Article } from '@/components/pages/Article'
import { EditorRoute } from '@/components/pages/Editor'
import { LoginRoute } from '@/components/pages/Login'
import { NoMatch } from '@/components/pages/NoMatch'
import { RegisterRoute } from '@/components/pages/Register'
import { SettingsRoute } from '@/components/pages/Settings'
import { Top } from '@/components/pages/Top'
import { User } from '@/components/pages/User'
import { useLocation } from 'react-router-dom'

export const Routes: React.FC = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="routing-transition" timeout={500}>
        <Switch location={location}>
          <Route path="/" component={Top} exact />
          <Route path="/user/:name" component={User} exact />
          <Route path="/article/:slug" component={Article} exact />
          <Route path="/login" component={LoginRoute} exact />
          <Route path="/register" component={RegisterRoute} exact />
          <Route path="/settings" component={SettingsRoute} exact />
          <Route path="/editor" component={EditorRoute} exact />
          <Route path="*" component={NoMatch} exact />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
