export {};

let name = 'Atsu';

name = 'Hm';

let nickname = 'Hm' as const;

// Hm型に固定されてるので、他の値を代入して破壊することができない
// Type '"Hmtr"' is not assignable to type '"Hm"'.ts(2322)
// nickname = 'Hmtr';

let profile = {
  name: 'Sou',
  height: 180
} as const;

// profile.name = 'Souichi';
// profile.height = 181;