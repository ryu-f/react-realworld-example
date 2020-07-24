import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { withScreenshot } from 'storycap'
import { addParameters, addDecorator } from '@storybook/react'
import { GlobalStyle } from '../src/styles'
import { lightTheme } from '../src/styles/Theme'
import { ThemeProvider } from 'styled-components'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(story => (
  <Provider store={createStore(() => null)}>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </Provider>
))

addDecorator(withScreenshot())

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS, defaultViewport: 'iphone6' } })

addParameters({
  backgrounds: [
    { name: 'basic', value: 'rgb(238, 238, 238)', default: true },
    { name: 'white', value: '#fff', default: true }
  ]
})
