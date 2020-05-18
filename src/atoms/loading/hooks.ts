import { loadingState } from './state'
import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

export const useLoading = () => {
  const toggleAppLoading = useSetRecoilState(loadingState)
  const appLoaded = useCallback(() => {
    toggleAppLoading({ isAppLoading: true })
  }, [toggleAppLoading])

  return { appLoaded }
}
