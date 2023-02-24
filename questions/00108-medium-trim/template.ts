type WhiteKey = ' ' | '\n' | '\t'
type Trim<S extends string> =
  S extends (`${WhiteKey}${infer R}`) | (`${infer R}${WhiteKey}`)
  ? Trim<R>
  : S
