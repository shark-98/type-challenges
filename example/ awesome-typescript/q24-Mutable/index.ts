// question
type Foo1x = {
  readonly a: number;
  readonly b: string;
  readonly c: boolean;
};

const mutableFoo: Mutable1<Foo1x, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
// mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.

// answer
type Mutable1<T, Keys extends keyof T = keyof T> =
  { [P in keyof T as P extends Keys ? never : P]: T[P] }
  &
  { -readonly [P in Keys]: T[P] }
