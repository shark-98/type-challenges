type Flatten<T extends unknown[], N extends unknown[] = []> =
  T extends [infer L, ...infer R]
  ? L extends unknown[] ? Flatten<[...L, ...R], N> : Flatten<R, [...N, L]>
  : N
