// question
type NaiveResult = NaiveFlat<[['a'], [['b', 'c']], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

// answer
// case1
type NaiveFlat<T extends any[]> =
  T extends [infer F, ...infer L]
  ? (F extends any[] ? NaiveFlat<F> : F) | NaiveFlat<L>
  : never

// case2
type NaiveFlat2<T extends any[]> =
  T extends (infer P)[]
  ? P extends any[]
    ? NaiveFlat2<P>
    : P
  : never
