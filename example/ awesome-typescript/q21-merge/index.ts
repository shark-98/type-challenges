// question
type Foo1 = {
  a: number;
  b: string;
};

type Bar = {
  b: number;
};

const ab: Merge1<Foo1, Bar> = { a: 1, b: 2 };

// answer
type Merge1<FirstType, SecondType> = {
  [P in keyof (FirstType & SecondType)]:
    P extends keyof SecondType
    ? SecondType[P]
    : P extends keyof FirstType
      ? FirstType[P]
      : never
}
