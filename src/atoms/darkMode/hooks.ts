import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { darkModeState } from './state'

export const useDarkMode = () => {
  const toggleDarkMode = useSetRecoilState(darkModeState)
  const chaneDarkMode = useCallback(
    (flag: boolean) => {
      toggleDarkMode({ isDarkMode: flag })
    },
    [toggleDarkMode]
  )

  return { chaneDarkMode }
}
