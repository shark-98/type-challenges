// question
interface Example {
  a: string;
  b: string | number;
  c: () => void;
  d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}

// answer
type ConditionalPick<T, K> = {
  [P in keyof T as T[P] extends K ? P : never]: K
}
