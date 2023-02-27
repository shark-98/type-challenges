// type StringToUnion<T extends string, N extends string = never> =
//   T extends `${infer L}${infer R}`
//   ? StringToUnion<R, L | N>
//   : N

type StringToUnion<T extends string> =
  T extends `${infer L}${infer R}`
  ? L | StringToUnion<R>
  : never
