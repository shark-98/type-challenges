type Filter<T extends any[], P> =
  T extends [infer F, ...infer L]
  ? F extends P
    ? [F, ...Filter<L, P>]
    : Filter<L, P>
  : T
