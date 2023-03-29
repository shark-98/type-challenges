import { parseQueryString } from "./index";

describe('获取router的query参数', () => {
  it('easy', () => {
    const str = 'a=1&b=2&c=3'
    const result = parseQueryString(str)

    expect(result).toEqual({
      a: '1',
      b: '2',
      c: '3'
    })
  })

  it('medium', () => {
    const str = 'a=1&b=2&c=3&a=10'
    const result = parseQueryString(str)

    expect(result).toEqual({
      a: ['1', '10'],
      b: '2',
      c: '3'
    })
  })
})
