// question
type I00 = IsUnion1<string | number>; // true
type I10 = IsUnion1<string | never>; // false
type I20 = IsUnion1<string | unknown>; // false

// answer
type IsUnion1<T, U = T> =
  T extends any
  ? [U] extends [T]
    ? false
    : true
  : never

// 伪代码流程
// type IsUnion1<T = string | number, U = string | number> =
//   string extends any
//   ? [string | number] extends [string] ? false : true
//   : never
//   |
//   number extends any
//   ? [string | number] extends [string] ? false : true
//   : never 
