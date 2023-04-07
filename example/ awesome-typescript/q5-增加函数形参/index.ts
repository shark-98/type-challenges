// question
type Fn = (a: number, b: string) => number

type FinalFn = AppendArgumentT<Fn, boolean>
// (x: boolean, a: number, b: string) => number

// answer
type AppendArgumentT<F, A> =
  F extends (...args: infer Args) => infer R
  ? (x: A, ...args: Args) => R
  : never
