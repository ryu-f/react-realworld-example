import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { loadingState } from './state'

export const useLoading = () => {
  const toggleAppLoading = useSetRecoilState(loadingState)
  const appLoaded = useCallback(() => {
    toggleAppLoading({ isAppLoading: true })
  }, [toggleAppLoading])

  return { appLoaded }
}
