type AlphabetLower = {
  "A": "a",
  "B": "b",
  "C": "c",
  "D": "d",
  "E": "e",
  "F": "f",
  "G": "g",
  "H": "h",
  "I": "i",
  "J": "j",
  "K": "k",
  "L": "l",
  "M": "m",
  "N": "n",
  "O": "o",
  "P": "p",
  "Q": "q",
  "R": "r",
  "S": "s",
  "T": "t",
  "U": "u",
  "V": "v",
  "W": "w",
  "X": "x",
  "Y": "y",
  "Z": "z"
}

type AlphabetLowerKeys = keyof AlphabetLower

type KebabCase<S extends string, N extends string = ''> =
  S extends `${infer L}${infer R}`
  ? KebabCase<R, `${N}${L extends AlphabetLowerKeys ? `${N extends '' ? '' : '-'}${AlphabetLower[L]}` : L}`>
  : N
