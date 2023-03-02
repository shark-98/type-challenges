type EndsWith<T extends string, U extends string> =
  U extends ''
  ? true
  : T extends U
    ? true
    : T extends `${infer L}${infer R}`
      ?
        R extends U
        ? true
        : false
      : false


type EndsWithNormal<T extends string, U extends string> =
  T extends `${string}${U}` ? true : false
