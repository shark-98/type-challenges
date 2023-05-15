// question
type S03 = StartsWith2<'123', '12'> // true
type S13 = StartsWith2<'123', '13'> // false
type S23 = StartsWith2<'123', '1234'> // false

// answer
type StartsWith1<T extends string, U extends string> =
  U extends `${infer F1}${infer L1}`
  ? T extends `${infer F2}${infer L2}`
    ? F1 extends F2
      ? StartsWith1<L2, L1>
      : false
    : false
  : true

type StartsWith2<T extends string, U extends string> =
  T extends `${U}${any}`
  ? true
  : false
