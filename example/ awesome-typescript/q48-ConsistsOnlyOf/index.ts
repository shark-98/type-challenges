// question
type C0 = ConsistsOnlyOf<'aaa', 'a'> //=> true
type C1 = ConsistsOnlyOf<'ababab', 'ab'> //=> true
type C2 = ConsistsOnlyOf<'aBa', 'a'> //=> false
type C3 = ConsistsOnlyOf<'', 'a'> //=> true

// answer
type ConsistsOnlyOf<
  LongString extends string,
  Substring extends string,
> =
  LongString extends ''
  ? true
  : LongString extends `${Substring}${infer L}`
    ? ConsistsOnlyOf<L, Substring>
    : false
