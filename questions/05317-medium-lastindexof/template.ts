type LastIndexOf<T extends unknown[], U, Count extends unknown[] = [], Index extends number = -1> =
  T extends [infer F, ...infer L]
  ? LastIndexOf<
      L, U, [...Count, any],
      F extends U
      ? `${U}` extends `${F}`
        ? Count['length']
        : Index
      : Index
    >
  : Index
