type DropChar<S extends string, C extends string, N extends string = ''> =
  S extends `${infer L}${infer R}`
  ? DropChar<R, C, `${N}${L extends C ? '' : `${L}`}`>
  : N
