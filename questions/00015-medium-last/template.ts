type Last<T extends unknown[]> = T extends [...any, infer R] ? R : never
