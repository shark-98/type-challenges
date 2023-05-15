// question
type T00 = ToNumber<"0">; // 0
type T10 = ToNumber<"10">; // 10
type T20 = ToNumber<"20">; // 20

// answer
type ToNumber<
  T extends string,
  Arr extends unknown[] = [],
  C extends number = Arr['length']
> =
  `${C}` extends T
  ? C
  : ToNumber<T, [...Arr, any]>
