export {};

type Profile = {
    name: string;
    age: number;
}

// アノテーションをProfileにする
const me: Profile = {
    name: "Sou",
    age: 18
};

me.age++;

console.log(me);

type PersonalProfile = Readonly<Profile>;

const friend: PersonalProfile = {
    name: "Souichi",
    age: 18
};

// Cannot assign to 'age' because it is a read-only property.ts(2540)
// friend.age++;

type YomitoriSenyo<T> = {
    // for of とは違う
    readonly[P in keyof T]: T[P];
}

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;