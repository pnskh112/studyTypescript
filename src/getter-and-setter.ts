export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない。
//   * 参照できる
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {

  // Duplicate identifier 'owner'
  // getterの名前とメンバ変数が競合してしまってる
  // メンバ変数を被らないようにリネームしてあげる
  // owner -> _owner
  // 慣習的にこうしている
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string,secretNumber: number ) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getというキーワードを伴うメソッドがgetter
  get owner() {
    return this._owner;
  }

  // setというキーワードを伴うメソッドがsetter
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はmさん', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.owner);

// こちらの結果はundefinedになる（参照できない）
console.log(card.secretNumber);