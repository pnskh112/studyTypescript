export {};

// Strict null checkをfalseにしないとエラーになる
// union型を使ってnullを許容することでも局所的にエラーを防ぐことができる
const profile: { name: string, age: number | null } = {
    name: "Sou",
    age: null
};
