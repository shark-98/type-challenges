// question
type S000 = SmallerThan<0, 1>; // true
type S100 = SmallerThan<2, 0>; // false
type S200 = SmallerThan<8, 10>; // true


// answer
type SmallerThan<
  N extends number,
  M extends number,
  Arr extends unknown[] = []
> =
  M extends Arr['length']
  ? false
  : N extends Arr['length']
    ? true
    : SmallerThan<N, M, [...Arr, any]>
