// question
type Arr01 = Push1<[], 1> // [1]
type Arr11 = Push1<[1, 2, 3], 4> // [1, 2, 3, 4]

// answer
type Push1<T extends any[], V> =
  [...T, V]
