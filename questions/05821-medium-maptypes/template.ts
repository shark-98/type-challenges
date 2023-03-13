type MapTypes<T, R extends { mapFrom: unknown, mapTo: unknown }> = {
  [P in keyof T]:
    T[P] extends R['mapFrom']
    ? R extends { mapFrom: T[P] }
      ? R['mapTo']
      : never
    : T[P]
}
