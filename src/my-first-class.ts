export {};

// セミコロンは書かない
class Person {
  // 型のアノテーションを書いてあげる
  name: string;
  age: number;

  // コンストラクターに戻り値の型は書かない
  // コンストラクターは値を返さない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
let hanako = new Person('Hanako', 18);
console.log(hanako.profile());

