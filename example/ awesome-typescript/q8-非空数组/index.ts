// question

// const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
const c: NonEmptyArray<string> = ['Hello TS', '1'] // 非空数据，正常使用

// answer
type NonEmptyArray<T> = [T, ...T[]]
