type FalseType = 0 | '' | false | undefined | null | [] | { [P in any]: never }

type AnyOf<T extends readonly any[]> =
  T extends [infer L, ...infer R]
  ? L extends FalseType ? AnyOf<R> : true
  : false

