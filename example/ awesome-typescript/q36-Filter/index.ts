// question
type F00 = Filter1<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F10 = Filter1<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F20 = Filter1<[0, true, any, "abao"], string>; // [any, "abao"]

// answer
type Filter1<T extends any[], F, R extends unknown[] = []> =
  T extends [infer A, ...infer B]
  ? Filter1<B, F, [A] extends [F] ? [...R, A] : R>
  : R
