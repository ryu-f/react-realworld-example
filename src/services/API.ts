const API_ROOT = 'https://conduit.productionready.io/api'

const headers = new Headers()

export const API = {
  request: <T>(url: string, config: RequestInit = { mode: 'cors', headers }): Promise<T> => {
    return fetch(`${API_ROOT}${url}`, {
      ...config
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
  },
  setToken: (token: string) => headers.set('authorization', `Token ${token}`)
}
