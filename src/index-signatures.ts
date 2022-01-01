export {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

const profile: Profile =  { name: "Sou", underTwenty: false };

// Property 'name' does not exist on type '{}'.ts(2339)
// プロパティnameが存在しないのでエラー
// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = "Sou";
profile.age = 18;
profile.nationality;