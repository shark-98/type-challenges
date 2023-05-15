// question
type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40

// answer
type Add<T extends number, R extends number> =
  [...CreateArr<T>, ...CreateArr<R>]['length']

type CreateArr<N extends number, Arr extends unknown[] = []> =
  Arr['length'] extends N
  ? Arr
  : CreateArr<N, [...Arr, any]>
