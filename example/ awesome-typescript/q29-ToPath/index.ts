// question
type aa = ToPath<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
type bb = ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']
type cc = ToPath<'foo[0].bar.baz[1]'> //=> ['foo', '0', 'bar', 'baz', '1]

// answer
type GetDynamicKey<T extends string> =
  T extends `${infer X}[${infer K}]`
  ? [X, K]
  : [T]

type ToPath<S extends string, Delimiter extends string = '.'> =
  S extends `${infer F}${Delimiter}${infer L}`
  ? [...GetDynamicKey<F>, ...ToPath<L>]
  : [...GetDynamicKey<S extends Delimiter ? '' : S>]
