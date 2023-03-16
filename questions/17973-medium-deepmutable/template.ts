type baseType = number | string | boolean | Function

type DeepMutable<T extends { [key: string]: any }> = {
  -readonly [P in keyof T]: T[P] extends baseType ? T[P] : DeepMutable<T[P]>
}
