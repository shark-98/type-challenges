type Chainable<T extends { [key: string]: any } = {}> = {
  option<
    K extends string,
    V extends any
  >(key: K extends keyof T ? never : K, value: V):
    Chainable<
      { [P in keyof T as P extends K ? never : P]: T[P] }
      &
      { [P in K]: V }
    >
  get(): T
}



