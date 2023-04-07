// question
type Foo = {
  a: number;
  b?: string;
  c: boolean;
}

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }

// answer
// case1
type SetOptional<T, K extends keyof T> =
  ExpandRecursively<
    { [P in keyof T as P extends K ? P : never]?: T[P] }
    &
    { [P in keyof T as P extends K ? never : P]: T[P] }
  >


// case2
type SetOptional2<T, K extends keyof T> =
  ExpandRecursively<
    Omit<T, K>
    &
    Partial<Pick<T, K>>
  >

