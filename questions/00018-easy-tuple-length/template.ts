type Length<T extends readonly (number | string)[]> = T extends { length: infer L } ? L : never;
