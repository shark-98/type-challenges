// question
type Item = 'semlinker,lolo,kakuqo';
type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]

// answer
type Split<
  S extends string,
  Delimiter extends string
> =
  S extends `${infer F}${Delimiter}${infer L}`
  ? [F, ...Split<L, Delimiter>]
  : [S extends Delimiter ? '' : S]

