type LengthOfString<S extends string, N extends string[] = []> =
  S extends `${infer L}${infer R}`
  ? LengthOfString<R, [L, ...N]>
  : N['length']
