// question
type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date

// answer
type Curry<F extends (...args: any[]) => any> =
  F extends (arg: infer A, ...args: infer L) => infer R
  ? L['length'] extends 0
    ? F
    : (arg: A) => Curry<(...args: L) => R>
  : never
