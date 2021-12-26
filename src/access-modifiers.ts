export {};

// セミコロンは書かない
class Person {
  // 型のアノテーションを書いてあげる
  // publicは基本かかない
  // protectedは小クラス クラスを継承したクラスでも参照できる
  public name: string;
  private age: number;
  // コンストラクターで初期化してあげる
  protected nationality: string;

  // コンストラクターに戻り値の型は書かない
  // コンストラクターは値を返さない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
      // this.ageはprivateなのでエラーになる
      // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
      return `name: ${this.name}, nationality: ${this.nationality}`
  }
}

const taro = new Person("Taro", 30, "Japan");
// console.log(taro.profile());
console.log(taro.profile());
console.log(taro.name);
// let hanako = new Person('Hanako', 18);

