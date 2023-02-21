type TupleToObject<T extends readonly (number | string)[]> = {
  [P in T[number]]: P
}
