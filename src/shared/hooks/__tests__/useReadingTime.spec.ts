import { renderHook } from '@testing-library/react-hooks'
import { useReadingTime } from '../useReadingTime'

describe('useReadingTime', () => {
  const textGenerate = (count: number) => [...Array(count)].map(() => 'a').join('')

  test('文字数に応じた計算結果が返ってきているか', () => {
    const { result } = renderHook(() => useReadingTime())
    expect(result.current.calculateReadingTime('aaa')).toBe('1')
    expect(result.current.calculateReadingTime(textGenerate(400))).toBe('2')
    expect(result.current.calculateReadingTime(textGenerate(600))).toBe('3')
  })
})
