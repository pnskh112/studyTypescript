export {};

class Person {
    // 宣言を省略してもコンストラクターの引数内でアクセス修飾子をつければ初期化まで行われる
    // more-constructor.tsを参照
    constructor(public name: string, public age: number) {} 
}

const taro = new Person("たろう", 20);

console.log({taro});

type PersonType = typeof Person;

// タプル型で、コンストラクターの引数の構造がProfileという型として取得できる
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["Sou", 23];
const sou = new Person(...profile);

console.log({sou});

type MyConstructorParameters<
    // extendsがあるので制約がある。どんな型との互換性が必要かというと
    // newすることで何かを返す型
    // つまり、classの型でないといけない
    T extends abstract new (...args: any) => any
// ? と : があるのでconditional type
// T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any が条件の部分
// クラスの型しかこない制約を持っている以上、この条件は必ず真になる。必ずクラスの型になる。
// 引数の部分の型はany型な引数として受け取ったものから型だけをinferで抽出してPとして扱う
// Pは引数の型であるので、引数の型が帰ってくる
> = T extends abstract new (...args: infer P) => any ? P : never;
