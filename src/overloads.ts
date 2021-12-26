export {};

// スキーマ定義のようなもの
// 引数と戻り値の型のみ定義する。
// これがシグネチャ
// シグネチャは関数を書く前に書く
// 関数の宣言がシグネチャである。
// 宣言したものを使っていくよ
function double(value: number): number;
function double(value: string): string;

// any型だがシグネチャで型データの受け取りを宣言できているのでnumberとstringしか受け取れない
function double(value: any): any{
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  }
}

console.log(double(100));
// NaN(Not a Number)が出ないような対処が必要
console.log(double('Go'));
