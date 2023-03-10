type IndexOf<T extends unknown[], U, R extends unknown[] = []> =
  T extends [infer F, ...infer L]
  ? F extends U
    ? [] extends F
      ? IndexOf<L, U, R>
      : IndexOf<L, U, [...R, F]>
    : IndexOf<L, U, R>
  : R['length'] extends 0 ? -1 : R['length']
