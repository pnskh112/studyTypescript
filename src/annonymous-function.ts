export {};

// 関数自体の型をVSCodeの表示通りにアノテーションしてあげる
const bmi: (height: number, weight: number) => number = function(
  height: number,weight: number): number {
     return weight / (height * height);
    };

console.log(bmi(1.78,73));