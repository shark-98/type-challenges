type Integer<T extends number> =
  T extends number
  ? number extends T
    ? never
    : `${T}` extends `${infer F}${infer L}`
      ? `${L}` extends '.0' | ''
        ? T
        : never
      : T
  : never
