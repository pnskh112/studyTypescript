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
type OptionalProfile = Optional<Profile>;
