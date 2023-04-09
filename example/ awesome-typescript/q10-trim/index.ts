// question

// 测试用例
type a = Trim1<' semlinker '>
//=> 'semlinker'

// answer
type Trim1<V extends string> =
  V extends `${infer F}${infer L}`
  ? `${F extends ' ' ? '' : F}${Trim1<L>}`
  : ''
