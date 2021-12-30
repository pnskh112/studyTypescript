export {};

class Animal {
  constructor(public name: string) {

  }
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {

  public speed: number;

  // コンストラクターはsuperを実行してください
  // Constructors for derived classes must contain a 'super' call.
  // 小クラスのコンストラクターでの初期化と親クラスでのコンストラクターでの初期化がいる場合、
  // 親クラスのコンストラクターの初期化が先に呼ばれる
  // Typescriptが暗黙的に行う
  // コンストラクターでの初期化の処理はコンストラクターにアクセス修飾子をつけると行ってくれる
  constructor(name: string, speed: number) {
    // Expected 1 arguments, but got 0
    // 引数を一つ以上は渡す必要がある
    super(name);

    this.speed = speed;
  }

  run(): string{
    // 親クラスのrunメソッドを呼ぶことができる
    const parentMessage = super.run();
    // 実行結果をオブジェクト形式で表示してくれる
    console.log({parentMessage});
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('Mickery').run());
console.log(new Lion('Shimba', 80).run());