import * as React from 'react'

import { App } from '@/components/App'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import configureStore from './store/configureStore'
import { hot } from 'react-hot-loader/root'

const MOUNT_NODE = document.getElementById('root')
const store = configureStore()

if (!MOUNT_NODE) throw new Error('<div id="root" /> not found')

if (process.env.DEBUG_ENV === 'enable') {
  import('why-did-you-update').then(({ whyDidYouUpdate }) => {
    whyDidYouUpdate(React)
  })
}

const Root = hot(() => (
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
))

ReactDOM.render(<Root />, MOUNT_NODE)
