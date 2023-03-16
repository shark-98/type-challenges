type ToPrimitive<T> = {
  [P in keyof T]:
    T[P] extends string
    ? string
    : T[P] extends number
      ? number
      : T[P] extends boolean
        ? boolean
        : ToPrimitive<T[P]>
}
