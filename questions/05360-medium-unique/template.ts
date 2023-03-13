type MyIncludes<T extends unknown[], U> =
  T extends [infer F, ...infer L]
  ? MyEqual<F, U> extends true
  ? true
  : MyIncludes<L, U>
  : false

type Unique<T extends unknown[], N extends unknown[] = []> =
  T extends [infer F, ...infer L]
  ? Unique<
      L,
      MyIncludes<N, F> extends true
      ? Unique<L, N>
      : [...N, F]
    >
  : N
