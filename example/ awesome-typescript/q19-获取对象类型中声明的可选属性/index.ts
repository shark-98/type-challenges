// question
type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"

// answer
type OptionalKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]
