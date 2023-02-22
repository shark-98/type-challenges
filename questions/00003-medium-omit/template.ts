type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type MyOmitNormal<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
