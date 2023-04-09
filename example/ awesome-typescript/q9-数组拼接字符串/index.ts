// question

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"

// answer
type JoinStrArray<Arr extends string[], Separator extends string> =
  Arr extends [infer F, ...infer L]
  ? F extends string
    ? L extends string[]
      ? `${F}${Separator}${JoinStrArray<L, Separator>}`
      : ''
    : ''
  : ''
