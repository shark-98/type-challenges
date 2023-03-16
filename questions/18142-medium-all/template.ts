type All<T extends unknown[], K> =
  T extends [infer F, ...infer L]
  ? MyEqual<F, K> extends true
    ? All<L, K>
    : false
  : true
