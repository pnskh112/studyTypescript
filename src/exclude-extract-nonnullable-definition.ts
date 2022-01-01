export {};

// Distributive Conditional Types
// 分配法則
// 条件型がジェネリック型に作用する場合、共用体型が与えられると分散型になります。
type MyExclude<T, U> = T extends U ? never : T;

type MyNewExclude<T> = 
  // string型がstring | numberと互換性があるかを確認。
  // この上2つの行の評価結果はnever
  // ３つ目の評価結果はDebugType
  // never | never | DebugType なので最終的な結果は DebugType になる
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;


// SomeTypes内にあるTypeを分けると string number DebugType の３つ
type MyFunctionType = MyExclude<SomeTypes, string | number>


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;