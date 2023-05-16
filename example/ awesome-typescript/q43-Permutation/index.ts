// question
type P0 = Permutation1<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
// ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
type P1 = Permutation1<'a' | 'b' | 'c'>

// answer
type Permutation1<T, K = T> =
  [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation1<Exclude<T, K>>]
    : never;

// 1、
// ['a', ...Permutation<'b' | 'c'>] | ['b', ...Permutation<'a' | 'c'>] | 
// ['c', ...Permutation<'a' | 'b'>]
 
// 2、 
// => ...Permutation<'b' | 'c'> 递归做再次分发后
// => ['b', ...Permutation<'c'>] | ['c', ...Permutation<'b'>]
// => ['b', 'c'] | ['c', 'b']

// 3、再与 1 结合也就是 （...会将结果展开）
// => ['a', 'b', 'c']  |  ['a', 'c', 'b']                             

// 再反复上面的 1 2 3 步骤得到最终结果
// => type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] | ["b", "c", "a"] |["c", "a", "b"] | ["c", "b", "a"]                   
