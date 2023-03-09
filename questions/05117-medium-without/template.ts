type Without<T extends unknown[], U> =
  T extends [infer F, ...infer L]
  ? F extends (U extends any[] ? U[number] : U)
    ? Without<L, U>
    : [F, ...Without<L, U>]
  : T
