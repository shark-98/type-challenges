// question
type I01 = IsNever1<never> // true
type I11 = IsNever1<never | string> // false
type I21 = IsNever1<null> // false

// answer
type IsNever1<T> = [T] extends [never] ? true : false
