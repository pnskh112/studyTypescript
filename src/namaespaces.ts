export {};

namespace Japanese {
  // 名前空間にもexportをつけてあげる
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace  Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
    ) {}
  }
}

// Japanese.Personだけではエラーが出るのでexportしてあげる必要がある。
// Property 'Person' does not exist on type 'typeof Japanese'.
const me = new Japanese.Tokyo.Person('はmさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('まっちゃん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'joseph', 'Jackson');
console.log(michael);