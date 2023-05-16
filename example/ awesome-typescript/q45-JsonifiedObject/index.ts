// question
type MyObject = {             // type JsonifiedMyObject = {
  str: "literalstring",       //  str: "literalstring"
  fn: () => void,             //  fn: never
  date: Date,                 //  date: string
  customClass: MyClass,       //  customClass: "MyClass"
  obj: {                      //  obj: JsonifiedObject<{
    prop: "property",         //    prop: "property"
    clz: MyClass,             //    clz: MyClass
    nested: { attr: Date }    //    nested: { attr: Date }
  },                          //  }>
}                             // }

declare class MyClass {
  toJSON(): "MyClass";
}

type JsonifiedMyObject = JsonifiedObject<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;

// answer
type JsonifiedObject<T extends object> = {
  [P in keyof T]:
  T[P] extends { toJSON(): infer R }
  ? R
  : T[P] extends Function
    ? never
    : T[P] extends Object
      ? JsonifiedObject<T[P]>
      : T[P]
}
