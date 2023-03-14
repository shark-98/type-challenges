type NumberRange<L extends number, H extends number, N extends unknown[] = ConstructTuple<L>, R = never> =
  N['length'] extends H
  ? R | H
  : NumberRange<L, H, [...N, unknown], R | N['length']>
