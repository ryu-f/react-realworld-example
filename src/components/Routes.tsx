import * as React from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, RouteProps, Switch } from 'react-router-dom'

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
  const routes: RouteProps[] = [
    {
      path: '/',
      component: Top,
      exact: true
    },
    {
      path: '/user/:name',
      component: User,
      exact: true
    },
    {
      path: '/article/:slug',
      component: Article,
      exact: true
    },
    {
      path: '/login',
      component: LoginRoute,
      exact: true
    },
    {
      path: '/register',
      component: RegisterRoute,
      exact: true
    },
    {
      path: '/settings',
      component: SettingsRoute,
      exact: true
    },
    {
      path: '/editor',
      component: EditorRoute,
      exact: true
    },
    {
      path: '*',
      component: NoMatch
    }
  ]

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="routing-transition" timeout={500}>
        <Switch location={location}>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
