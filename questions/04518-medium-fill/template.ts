// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   Count extends unknown[] = [],
//   Flag extends boolean = Count['length'] extends Start ? true : false
// > =
//   Count['length'] extends End
//   ? T
//   : T extends [infer F, ...infer L]
//     ? Flag extends false
//       ? [F, ...Fill<L, N, Start, End, [...Count, unknown]>]
//       : [N, ...Fill<L, N, Start, End, [...Count, unknown], Flag>]
//     : T

type FillEmptyTuple<
  N extends number,
  R extends unknown[] = [],
> =
  R['length'] extends N
  ? R
  : FillEmptyTuple<N, [unknown, ...R]>

type IsBetween<
  T extends number,
  A extends number,
  B extends number,
  E = FillEmptyTuple<T>,
> =
  T extends A
  ? true
  : E extends [unknown, ...infer Rest]
    ? E['length'] extends B
      ? false
      : Rest['length'] extends A
        ? true
        : IsBetween<T, A, B, Rest>
    : false

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Indexs extends unknown[] = [],
  R extends unknown[] = [],
> =
  Start extends End
  ? T
  : T extends [infer First, ...infer Rest]
    ? Fill<
      Rest,
      N,
      Start,
      End,
      [unknown, ...Indexs],
      IsBetween<Indexs['length'], Start, End> extends true
      ? [...R, N]
      : [...R, First]
    >
    : R
