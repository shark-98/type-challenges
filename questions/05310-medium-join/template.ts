type Join<T extends unknown[], U> =
  T extends [infer F, ...infer L]
  ? `${F}${L extends [] ? '' : `${U}${Join<L, U>}`}`
  : T
