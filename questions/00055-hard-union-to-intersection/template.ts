type UnionToIntersection<U> =
  (U extends any ? (arg: U) => unknown : never) extends ((arg: infer R) => unknown)
  ? R
  : never
