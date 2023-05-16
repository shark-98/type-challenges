// question
type T000 = Unpacked<string>;  // string
type T01 = Unpacked<string[]>;  // string
type T02 = Unpacked<() => string>;  // string
type T03 = Unpacked<Promise<string>>;  // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T05 = Unpacked<any>;  // any
type T06 = Unpacked<never>;  // never

// answer
type Unpacked<T> =
  T extends ((infer X)[]) | ((...args: any[]) => infer X) | (Promise<infer X>)
  ? X
  : T
