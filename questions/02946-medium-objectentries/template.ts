type ObjectEntries<T> = {
  [P in keyof T]-?: [P, T[P] extends infer R | undefined ? R : T[P]]
}[keyof T]
