export {};

class VisaCard {
  readonly owner: string;

  // publicをつけるとこける
  // All declarations of 'owner' must have identical modifiers
  // owner' の宣言はすべて同一の修飾子を持たなければならない
  // constructor(public owner: string){
  constructor(owner: string){
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('はmさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベコーン';