type GetMiddleElement<T extends unknown[]> =
  T extends [infer F, ...infer M, infer L]
  ? M extends []
    ? [F, L]
    : GetMiddleElement<M>
  : T
