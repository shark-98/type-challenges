type FlipArguments<T extends Function> =
  T extends (...args: infer Q) => infer R
  ? (...args: Reverse<Q>) => R
  : 2
