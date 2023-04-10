// question
type I0 = Includes1<[], 1> // false
type I1 = Includes1<[2, 2, 3, 1], 2> // true
type I2 = Includes1<[2, 3, 3, 1], 1> // true

// answer
type Includes1<T extends Array<any>, E> =
  T extends [infer F, ...infer L]
  ? IsEqual<F, E> extends true
    ? true
    : Includes1<L, E>
  : false
