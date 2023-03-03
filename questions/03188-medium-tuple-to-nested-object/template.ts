type TupleToNestedObject<T extends unknown[], U> =
  T extends [infer A, ...infer B]
  ? { [P in A as P extends string ? P : never]: TupleToNestedObject<B, U> }
  : U
