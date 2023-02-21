type MyAwaited<T extends PromiseLike<any>> =
  T extends PromiseLike<infer R>
  ? R extends PromiseLike<any> ? MyAwaited<R> : R
  : never
