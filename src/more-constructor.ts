export {};

// Personクラスにセミコロンは書かない
class Person {
  // 初期化をしたいのでアクセス修飾子(publicやprotected)は省かない
  constructor(public name: string, protected age: number) {}
}

const me = new Person("ハmさん", 43);
console.log(me);