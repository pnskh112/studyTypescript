export {};

let name: any = 'Hello!';

let length = (name as string).length;

// 下の書き方は推奨されていない
// jsxの記法と似ているため
// let length = (<string>name).length;

// length = 'foo';