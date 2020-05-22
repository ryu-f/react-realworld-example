import { useCallback } from 'react'

/**
 * @param text - カウントする文字
 * 文字数から記事を読むのに掛かる分数を返す
 */
export const useReadingTime = () => {
  const WORDS_PER_MINUTE = 200

  const calculateReadingTime = useCallback((text: string) => {
    let readingTime = '1'
    if (text.length > 0) readingTime = Math.ceil(text.length / WORDS_PER_MINUTE).toString()
    return readingTime
  }, [])

  return { calculateReadingTime }
}
