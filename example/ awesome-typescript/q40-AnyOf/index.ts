// question
type A00 = AnyOf1<[]>; // false
type A10 = AnyOf1<[0, '', false, [], {}]>; // false
type A20 = AnyOf1<[1, '', false, [], {}]>; // true
type A30 = AnyOf1<[0, '' | 2, false, [], {}]>; // true

// answer
type AnyOf1<T extends any[]> =
  T extends [infer F, ...infer L]
  ? [F] extends [FalseType1]
    ? AnyOf1<L>
    : true
  : false

type FalseType1 = 0 | '' | false | undefined | null | [] | { [P in any]: never }
