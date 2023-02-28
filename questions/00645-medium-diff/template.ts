type Diff<O, O1> = {
  [P in keyof O | keyof O1 as P extends keyof O & keyof O1 ? never : P]:
  P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
}
