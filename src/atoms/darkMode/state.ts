import { atom } from 'recoil'

type DarkMode = {
  isDarkMode: boolean
}

const initialState: DarkMode = {
  isDarkMode: false
}

export const darkModeState = atom({
  key: 'theme',
  default: initialState
})
