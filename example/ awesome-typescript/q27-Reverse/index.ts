// question
type R0 = Reverse1<[]> // []
type R1 = Reverse1<[1, 2, 3]> // [3, 2, 1]

// answer
type Reverse1<
  T extends Array<any>,
  R extends Array<any> = []
> =
  T extends [infer F, ...infer L]
  ? Reverse1<L, [F, ...R]>
  : R
