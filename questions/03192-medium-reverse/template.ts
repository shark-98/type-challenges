type Reverse<T extends unknown[]> =
  T extends [infer A, ...infer B]
  ? [...Reverse<B>, A]
  : T
