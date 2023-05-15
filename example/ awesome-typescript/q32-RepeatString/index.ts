// question
type S00 = RepeatString<"a", 0>; // ''
type S11 = RepeatString<"a", 2>; // 'aa'
type S22 = RepeatString<"ab", 3>; // 'ababab'

// answer
type RepeatString<
  T extends string,
  C extends number,
  Arr extends unknown[] = [],
  R extends string = ''
> =
  Arr['length'] extends C
  ? R
  : RepeatString<T, C, [...Arr, any], `${R}${T}`>
