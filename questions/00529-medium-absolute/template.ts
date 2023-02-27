type NumberKeys = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Absolute<T extends number | string | bigint, N extends string = ''> =
  `${T}` extends `${infer L}${infer R}`
  ? Absolute<R, `${N}${L extends NumberKeys ? L : ''}`>
  : N
