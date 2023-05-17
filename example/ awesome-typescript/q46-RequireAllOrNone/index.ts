// question
interface Person1 {
  name: string;
  age?: number;
  gender?: number;
}

const p1: RequireAllOrNone<Person1, 'age' | 'gender'> = {
  name: "lolo"
};
// error
// const p2: RequireAllOrNone<Person1, 'age' | 'gender'> = {
//   name: "lolo",
//   age: 7,
// };
const p3: RequireAllOrNone<Person1, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
  gender: 1
};

// answer
type RequireAllOrNone<T, K extends keyof T> =
  Omit<T, K>
  &
  (Required<Pick<T, K>> | Partial<Record<K, never>>)
