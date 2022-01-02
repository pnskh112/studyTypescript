export {};

function add(a: number,b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;


// 山かっこの<T extends (...args: any) => any> は ジェネリクス型
// conditional typesは無数のパターンの条件式を書くことができる
// 条件式の中で型を拾い上げたい
// 戻り値の方をなんとかして拾い上げたい
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
// 条件を記載するところに書くことができる特殊なキーワード
// 条件の一部としてジェネリクス型を宣言できるようになる役割を持つ
// 型を拾い上げるために利用
) => infer R 
// 条件式の結果は常に真になる
// infer R 推論する という意味
// 型を推論した結果をRに代入してくださいね という意味
    ? R 
    : any;
