// question
type Arr = [1, 2, 3, 4, 5]
type I0000 = IndexOf1<Arr, 0> // -1
type I1000 = IndexOf1<Arr, 1> // 0
type I2000 = IndexOf1<Arr, 3> // 2

// answer
type IndexOf1<A extends any[], Item, C extends unknown[] = []> =
  A extends [infer F, ...infer L]
  ? [Item] extends [F]
    ? C['length']
    : IndexOf1<L, Item, [...C, any]>
  : -1
