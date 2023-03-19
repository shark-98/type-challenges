type FilterVal<T, U> =
  T extends []
  ? []
  : T extends [infer Head, ...infer Tail]
    ? Head extends U
      ? FilterVal<Tail, U>
      : [Head, ...FilterVal<Tail, U>]
    : never

type Combination<T extends string[]> = 
  T extends []
  ? never
  : { [K in keyof T]: T[K] | `${T[K]} ${Combination<FilterVal<T, T[K]>>}` }[number]
