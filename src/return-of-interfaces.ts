export {};

class Mahoutsukai {}
class Souryo {}

// 単一継承のみで、多重継承は認められない
// 複数のインターフェースの実装はできる
// Classes can only extend a single class.ts(1174)
// class Taro extends Mahoutsukai, Souryo{}

class Taro extends Mahoutsukai {}

interface Kenja {
  // 最強の呪文
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// インターフェース側でシグネチャを定義してるものについて、実装先に存在しないとエラーになる
// Class 'Jiro' incorrectly implements interface 'Kenja'.
//   Property 'ionazun' is missing in type 'Jiro' but required in type 'Kenja'.
// Class 'Jiro' incorrectly implements interface 'Senshi'.
//   Property 'kougeki' is missing in type 'Jiro' but required in type 'Senshi'.
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();