type TupleToUnion<T extends unknown[]> =
  T extends [infer R, ...infer Args]
  ? R | TupleToUnion<Args>
  : never
