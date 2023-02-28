type IsUnion<T, C = T> =
  [T] extends [never]
  ? false
  : T extends C
  ? [C] extends [T]
  ? false
  : true
  : never;
