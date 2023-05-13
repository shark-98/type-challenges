// question
type R00 = Repeat<0, 0>; // []
type R10 = Repeat<1, 1>; // [1]
type R20 = Repeat<number, 2>; // [number, number]

// answer
type Repeat<T, C extends number, R extends any[] = []> =
  R['length'] extends C
  ? R
  : Repeat<T, C, [...R, T]>
