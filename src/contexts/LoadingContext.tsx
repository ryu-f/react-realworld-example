import React, { createContext, useCallback, useContext, useState } from 'react'

type Context = {
  isAppLoaded: boolean
  toggleAppLoaded: (isLoading: boolean) => void
}

const defaultContext: Context = {
  isAppLoaded: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleAppLoaded: () => {}
}

const LoadingContext = createContext<Context>(defaultContext)

const ContextValue = () => {
  const [isAppLoaded, localToggleAppLoaded] = useState(false)

  const toggleAppLoaded = useCallback((current: boolean) => {
    localToggleAppLoaded(current)
  }, [])

  return {
    isAppLoaded,
    toggleAppLoaded
  }
}

export const LoadingProvider: React.FC = ({ children }) => {
  const context = ContextValue()

  return <LoadingContext.Provider value={context}>{children}</LoadingContext.Provider>
}

export const useLoading = () => useContext(LoadingContext)
