// question
type User = {
  id: number;
  kind: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     kind: 'customer'
//   }
// }

// answer
// 错误原因：泛型 T 只是约束于User类型，并不是局限于 User类型，所以返回结果 应该还需要接收其他类型变量。

// case1: T 类型兼容 User 类型
function makeCustomer1<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer'
  }
}
// case2: 返回值类型修改为 User类型
function makeCustomer2<T extends User>(u: T): User {
  return {
    id: u.id,
    kind: 'customer'
  }
}


