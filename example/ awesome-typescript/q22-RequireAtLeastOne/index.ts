// question
type Responder = {
  text?: () => string;
  json?: () => string;
  secure?: boolean;
};

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
  json: () => '{"message": "ok"}',
  secure: true
};

// answer
type RequireAtLeastOne<
  ObjectType,
  KeysType extends keyof ObjectType = keyof ObjectType,
> =
  KeysType extends keyof ObjectType
  ?
    { [P in KeysType]-?: ObjectType[P] }
    &
    { [P1 in keyof ObjectType as P1 extends KeysType ? never : P1]: ObjectType[P1] }
  : never
