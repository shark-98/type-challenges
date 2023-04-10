// question
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3

// answer
type Head<T extends Array<any>> =
  T extends [infer F, ...any[]]
  ? F
  : never
