// question
// 只能包含Keys中唯一的一个Key
interface Person2 {
  name: string;
  age?: number;
  gender?: number;
}

const p10: RequireExactlyOne<Person2, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
};
const p20: RequireExactlyOne<Person2, 'age' | 'gender'> = {
  name: "lolo",
  gender: 1
};
// Error
// const p30: RequireExactlyOne<Person2, 'age' | 'gender'> = {
//   name: "lolo",
//   age: 7,
//   gender: 1
// };

// answer
type RequireExactlyOne<T, Keys extends keyof T, K extends Keys = Keys> =
  K extends any
  ? Omit<T, Keys>
    &
    Required<Pick<T, K>>
    &
    Partial<Record<Exclude<Keys, K>, never>>
  : never;
