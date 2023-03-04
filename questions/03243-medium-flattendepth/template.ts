type FlattenOnce<T extends unknown[]> =
  T extends [infer F, ...infer R]
  ? [...(F extends unknown[] ? F : [F]), ...FlattenOnce<R>]
  : [];

type FlattenDepth<
  T extends unknown[],
  Time extends number = 1,
  CountArr extends unknown[] = []
> =
  T extends unknown[]
    ? CountArr['length'] extends Time
    ? T
    : FlattenDepth<FlattenOnce<T>, Time, [...CountArr, any]>
  : never;


