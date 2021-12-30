export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string;

fooString = barString;

// 文字列リテラル型を文字列型に代入しようとした場合
// エラーにならないので互換性がある
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値リテラル型を数値型に代入しようとした場合
// エラーにならないので互換性がある
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;


interface Animal {
  age: number;

  // ageだけでなくnameプロパティを追加すると、meへの代入がコンパイルエラーになる
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

// Personクラスを使ってインスタンスを生成して
// そのインスタンスをAnimal型のmeに代入してみる
// 代入できるので互換性がある
// （PersonクラスとAnimalインターフェースが関係を持っていない、依存関係を持っていなく、独立している）
// オブジェクトを代入できるかどうかの基準は、それぞれのオブジェクトが関係がないということ

// Property 'name' is missing in type 'Person' but required in type 'Animal'.
// 構造的部分型
me = new Person(18, 'Ha');