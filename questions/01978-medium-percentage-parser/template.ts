type PercentageParser<A extends string> =
  A extends `${infer F}${infer O}`
  ?
    F extends '+' | '-'
    ? [F, ...(O extends `${infer S}%` ? [S, '%'] : [O, ''])]
    : ['', ...(A extends `${infer S}%` ? [S, '%'] : [A, ''])]
  : ['', '', '']
