type TrimRight<S extends string> =
  S extends `${infer F}${WhiteKey}`
  ? TrimRight<F>
  : S
