// question
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]

// answer
type Tail<T extends Array<any>> =
  T extends [any, ...infer L]
  ? L
  : []
