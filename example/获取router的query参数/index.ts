type MergeValues<One, Other> =
  One extends Other
  ? One
  : Other extends unknown[]
    ? [One, ...Other]
    : [One, Other];

type ParseParam<Str extends string> =
  Str extends `${infer key}=${infer value}`
  ? { [P in key]: value }
  : Record<string, any>

type MergeParams<OneParam extends Record<string, any>, OtherParam extends Record<string, any>> = {
  readonly [Key in keyof OneParam | keyof OtherParam]:
  Key extends keyof OneParam
  ? Key extends keyof OtherParam
    ? MergeValues<OneParam[Key], OtherParam[Key]>
    : OneParam[Key]
  : Key extends keyof OtherParam
    ? OtherParam[Key]
    : never
}

type ParseQueryString<Str extends string> =
  Str extends `${infer F}&${infer L}`
  ? MergeParams<ParseParam<F>, ParseQueryString<L>>
  : ParseParam<Str>


export const parseQueryString = <Str extends string>(s: Str): ParseQueryString<Str> => {
  const arr = s.split('&');

  return arr.reduce((total: Record<string, any>, cur: string) => {
    const [key, value] = cur.split('=')
    if (!total[key]) {
      total[key] = value
    } else {
      total[key] = [...total[key], value]
    }

    return total
  }, {}) as any
}
