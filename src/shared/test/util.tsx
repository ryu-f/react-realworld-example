import * as React from 'react'

import { RenderOptions, render } from '@testing-library/react'

import { MemoryRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/Theme'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <MemoryRouter>{children}</MemoryRouter>
  </ThemeProvider>
)

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
