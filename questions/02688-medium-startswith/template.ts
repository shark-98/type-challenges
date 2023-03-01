type StartsWith<T extends string, U extends string> =
  T extends `${infer TL}${infer TR}`
  ? U extends `${infer UL}${infer UR}`
  ? UL extends TL ? StartsWith<TR, UR> : false
  : true
  : T extends U ? true : false


type StartsWithNormal<T extends string, U extends string> =
  T extends `${U}${string}` ? true : false;
