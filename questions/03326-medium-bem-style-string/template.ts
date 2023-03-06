type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${E extends []
  ? ''
  : { [K in keyof E]: `__${E[K]}` }[number]}${M extends []
  ? ''
  : { [K in keyof M]: `--${M[K]}` }[number]}`
