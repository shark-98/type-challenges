// question
type I000 = IsAny<never> // false
type I100 = IsAny<unknown> // false
type I200 = IsAny<any> // true

// answer
type IsAny<T> =
  0 extends 1 & T
  ? true
  : false

// any类型是个 ”黑洞“ 会吞噬除了never类型之外的大多数类型。
// type X0 = any & 1 // any
// type X1 = any & boolean // any
// type X2 = any & never // never
// 因此需要前置0 extends 交叉结果防止交叉结果为never类型的情况处理。
