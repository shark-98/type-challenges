// question
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false
type E3 = IsEqual<never, never>; // true
type E4 = IsEqual<string, never>; // false
type E5 = IsEqual<true, boolean>; // false
type E6 = IsEqual<true, boolean>; // false
type E7 = IsEqual<{ a: 'A' }, { readonly a: 'A' }>; // false

// answer
// case1: 带修饰符的无法正确判断。例：readonly
// type IsEqual<A, B> =
//   [A] extends [B]
//   ? [B] extends [A]
//     ? true
//     : false
//   : false

// case2
type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false
