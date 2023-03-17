type Zip<T extends unknown[], U extends unknown[]> =
  T extends [infer F, ...infer L]
  ? U extends [infer F1, ...infer L1]
    ? [[F, F1], ...Zip<L, L1>]
    : []
  : []
