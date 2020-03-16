/**
 * @param text - カウントする文字
 * 文字数から記事を読むのに掛かる分数を返す
 */
export const useReadingTime = (text: string) => {
  let readingTime = 1
  const wordsPerMinute = 200
  const textLength = text.split(' ').length

  if (textLength > 0) readingTime = Math.ceil(textLength / wordsPerMinute)
  return { readingTime }
}
