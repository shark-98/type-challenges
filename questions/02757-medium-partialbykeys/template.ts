type PartialByKeys<T, K extends keyof T = keyof T> =
  ({
    [P in keyof T as P extends K ? never : P]: T[P]
  } & {
      [P in K]?: T[P]
    }) extends infer R
  ? { [P in keyof R]: R[P] }
  : never
