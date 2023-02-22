type MyReadonly2<T, K extends keyof T = keyof T> =
  { readonly [P in keyof T as P extends K ? P : never]: T[P] }
  &
  { [P in keyof T as P extends K ? never : P]: T[P] }

type MyReadonly2Normal<T, K extends keyof T = keyof T> =
  Omit<T, K>
  &
  Readonly<Pick<T, K>>

