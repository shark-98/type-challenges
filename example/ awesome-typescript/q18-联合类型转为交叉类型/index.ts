// question
type U0 = UnionToIntersection1<string | number> // never
type U1 = UnionToIntersection1<{ name: string } | { age: number }> // { name: string; } & { age: number; }

// answer(分布式条件类型 + 函数参数类型逆变)
type UnionToIntersection1<U> =
  (U extends any ? (arg: U) => void : never) extends ((arg: infer R) => void)
  ? R
  : never
