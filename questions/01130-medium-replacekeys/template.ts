type ReplaceKeys<U, T, Y extends { [key: string]: any }> = {
  [P in keyof U]:
    P extends string
    ? P extends T
      ? unknown extends Y[P] ? never : Y[P]
      : U[P]
    : never
}
