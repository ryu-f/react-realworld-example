import { useCallback, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { articlesAPI } from '@/services/articles'
import { isError } from '@/services/isError'

type PostRequestPayload = {
  title: string
  description: string
  body: string
  tagList: Array<string>
}

export const usePostArticle = () => {
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const postArticleAsync = useCallback(async (input: PostRequestPayload) => {
    const { title, description, body, tagList } = input
    setLoading(true)
    setErrorMessage('')
    const response = await articlesAPI.post({ title, description, body, tagList })
    setLoading(false)

    if (isError(response)) {
      return response ? setErrorMessage('error') : setErrorMessage('system Error')
    }

    history.push('/')
  }, [])
  return { postArticleAsync, isLoading, errorMessage }
}
