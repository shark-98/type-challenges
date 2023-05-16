// question
type R000 = Replace1<'', '', ''> // ''
type R100 = Replace1<'foobar', 'bar', 'foo'> // "foofoo"
type R200 = Replace1<'foobarbar', 'bar', 'foo'> // "foofoobar"

// answer
type Replace1<
  S extends string,
  From extends string,
  To extends string
> =
  S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S

// question
type R01 = ReplaceAll1<'', '', ''> // ''
type R11 = ReplaceAll1<'barfoo', 'bar', 'foo'> // "foofoo"
type R21 = ReplaceAll1<'foobarbar', 'bar', 'foo'> // "foofoofoo"
type R31 = ReplaceAll1<'foobarfoobar', 'ob', 'b'> // "fobarfobar"

// answer
type ReplaceAll1<
  S extends string,
  From extends string,
  To extends string
> =
  S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${ReplaceAll1<B, From, To>}`
  : S
