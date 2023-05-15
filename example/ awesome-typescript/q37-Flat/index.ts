// question
type F01 = Flat<[]> // []
type F11 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F21 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]

// answer
type Flat<T extends any[]> =
  T extends [infer F, ...infer L]
  ? [...(F extends any[] ? Flat<F> : [F]), ...Flat<L>]
  : []
