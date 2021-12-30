export {};

abstract class Animal {
  // 抽象メソッドは抽象クラスでのみ定義できる
  // Abstract methods can only appear within an abstract class.ts(1244)
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// 抽象クラスを継承するとよく起こりうるエラー
// Non-abstract class 'Tiger' does not implement inherited abstract member 'cry' from class 'Animal'.ts(2515)
class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}

const tiger = new Tiger();
const cryingOfTiger = tiger.cry();
console.log({cryingOfTiger});