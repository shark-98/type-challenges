type Chunk<T extends unknown[], N, Temp extends unknown[] = [], Result extends unknown[] = []> =
  T extends [infer F, ...infer L]
  ? L['length'] extends 0
    ? Chunk<L, N, [], [...Result, [...Temp, F]]>
    : [...Temp, F]['length'] extends N
      ? Chunk<L, N, [], [...Result, [...Temp, F]]>
      : Chunk<L, N, [...Temp, F], Result>
  : Result
