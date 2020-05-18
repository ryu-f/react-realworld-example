import { atom } from 'recoil'

type LoadingState = {
  isAppLoading: boolean
}

const initialState: LoadingState = {
  isAppLoading: false
}

export const loadingState = atom({
  key: 'loading',
  default: initialState
})
