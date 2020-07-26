/* eslint-disable import/export */
import * as React from 'react'

import { RenderOptions, RenderResult, render } from '@testing-library/react'

import { MemoryRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../src/styles/Theme'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <MemoryRouter>{children}</MemoryRouter>
  </ThemeProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
