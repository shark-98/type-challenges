type Trunc<T extends string | number> =
  `${T}` extends `${infer F}${infer L}`
  ? F extends '.'
    ? ''
    : `${F}${Trunc<L>}`
  : T
