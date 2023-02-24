type Pop<T extends unknown[]> =
  T extends [...infer R, any]
  ? R
  : T
