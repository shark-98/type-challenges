// question
type S0 = Shift1<[1, 2, 3]>; // [2, 3]
type S1 = Shift1<[string, number, boolean]>; // [number, boolean]
type S2 = Shift1<[never]>; // []
type S3 = Shift1<[never, 'xxx']>; // []

// answer
type Shift1<T extends any[]> =
  T extends [any, ...infer L]
  ? L
  : []

