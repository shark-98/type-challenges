type AppendArgument<Fn extends Function, A> =
  Fn extends (...args: infer X) => infer R
  ? (...args: [...X, A]) => R
  : Fn
