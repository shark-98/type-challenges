// question
interface Foo11 {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
  aaa: '123',
  11: 'xx'
}

type FooWithOnlyBar = RemoveIndexSignature<Foo11>; //{ bar: () => void; aaa: '123'; 11: 'xx'; }

// answer
type RemoveIndexSignature<T> = {
  [
  P in keyof T as
    string extends P
    ? never
    : number extends P
      ? never
      : P
  ]: T[P]
}
