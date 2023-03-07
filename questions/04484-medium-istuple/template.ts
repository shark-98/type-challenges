type IsTuple<T> =
  [T] extends [never]
  ? false
  : T extends readonly unknown[]
    ? number extends T['length']
      ? false
      : true
    : false
