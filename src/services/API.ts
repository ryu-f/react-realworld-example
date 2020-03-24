const API_ROOT = 'https://conduit.productionready.io/api'

const headers = new Headers()
headers.append('Content-Type', 'application/json')
const defaultConfig: RequestInit = { mode: 'cors', headers }

export const API = {
  request: <T>(url: string, config: RequestInit = {}): Promise<T> => {
    return fetch(`${API_ROOT}${url}`, {
      ...defaultConfig,
      ...config
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
  },
  setToken: (token: string) => headers.append('authorization', `Token ${token}`),
  deleteToken: () => headers.delete('authorization')
}
