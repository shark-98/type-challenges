// type CurryingArgs<T, R> =
//   T extends [infer F, ...infer L]
//     ? (arg: F) => CurryingArgs<L, R>
//     : R

// declare function Currying<T>(fn: T):
//   T extends (...Args: infer A) => infer R
//     ? CurryingArgs<A, R> extends R
//       ? () => R
//       : CurryingArgs<A, R>
//     : never

type CurryingFn<T extends Function> =
  T extends (F: infer FT, ...L: infer LT) => infer R
    ? LT['length'] extends 0
      ? T
      : (F: FT) => CurryingFn<(...L: LT) => R>
    : never

declare function Currying<T extends Function>(fn: T): CurryingFn<T>

