export {};

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce() メソッドは、配列のそれぞれの要素に対してユーザーが提供した「縮小」コールバック関数を呼び出します。
// その際、直前の要素における計算結果の返値を渡します。
// 配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。
const reducer = (previousValue: number, currentValue: number) => {
  console.log( {previousValue, currentValue} );
  // return忘れずに
  return previousValue + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
}

console.log(sum(1,2,3,4,5));
