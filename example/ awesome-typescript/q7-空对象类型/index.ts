// question
const shouldPass: EmptyObject = {}; // 可以正常赋值
// const shouldFail: EmptyObject = { // 将出现编译错误
//   prop: "TS"
// }

// answer
type EmptyObject = {
  [key in keyof any]: never
}
