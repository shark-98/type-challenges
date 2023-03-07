type Flip<T extends { [key: string]: any }> = {
  [P in keyof T as `${T[P]}`]: P
}
