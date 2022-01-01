export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
};

// Type '"name" | "weight" | "height" | "age"' does not satisfy the constraint 'keyof DetailedProfile'.
//   Type '"age"' is not assignable to type 'keyof DetailedProfile'.ts(2344)
// type SimpleProfile = Pick<DetailedProfile, "name" | "weight" | "height" | "age">

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, "name" | "height">;
type MySmallProfile = MyOmit;
