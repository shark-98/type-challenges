type ConstructTuple<L extends number, N extends unknown[] = []> =
  N['length'] extends L
  ? N
  : ConstructTuple<L, [...N, unknown]>
