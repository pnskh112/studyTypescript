export {};


type Profile = {
    name: string;
    age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// Mapped Types とは in keyof の事！
// あるオブジェクトのプロパティの名前から型を作って一つづつ取り出している、ということを理解する
type Optional<T> = { [P in keyof T]?: T[P] | null };

// ↑こちらは、lib.es5.d.tsのpartialを参考にしている

/**
 * Make all properties in T optional
 */
//  type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

type OptionalProfile = Optional<Profile>;


// in演算子を使ったやり方こういう書き方もできる
type Keys = 'x' | 'y';
type Flags = { [K in Keys]: boolean };

const flag: Flags = {
  x: true,
  y: false,
};
