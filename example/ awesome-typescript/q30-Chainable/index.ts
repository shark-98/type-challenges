// question
const result = config
  .option('age', 7)
  .option('name', 'lolo')
  .option('address', { value: 'XiaMen' })
  .get()

type ResultType = typeof result
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }

// answer
declare const config: Chainable1

type Chainable1<T extends { [key: string]: any } = {}> = {
  option<K extends string, V>(key: K, value: V):
    Chainable1<T & { [P in K]: V }>
  get(): T
}
