export {};

const debugProfile = (name: string, age: number) => {
    console.log({name, age});
};

debugProfile("Sou", 21);


// Parametersというutility型に関数の型を指定してあげる
// debugProfile関数の型を求めて、
// それをParametersというutility型の型引数に指定してあげることで型を得流ことができる
// タプル型の型が返ってきていることがわかる
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 76];
// Type 'boolean' is not assignable to type 'number'.
// const OtherProfile: Profile = ["Gloria", true];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any 
    ? P 
    : never;
