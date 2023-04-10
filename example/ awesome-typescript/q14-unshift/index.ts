// question
type Arr0 = Unshift1<[], 1>; // [1]
type Arr1 = Unshift1<[1, 2, 3], 0>; // [0, 1, 2, 3]

// answer
type Unshift1<T extends any[], E> =
  [E, ...T]
