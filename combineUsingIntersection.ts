type FirstType = { name: string };
type SecondType = { age: number };

type ThirdCombinedType = FirstType & SecondType

let hello: ThirdCombinedType = {name: "abin",age:20};
let hello2: ThirdCombinedType = {name: "abin"};  //show error if any one type is not used

// -------------------------------------------------------------
// to combine or merge TypeScript types

type FirstType1 = { name: string };
type SecondType2 = { age: number };

// its similar to extend in interface
type ThirdCombinedType1 = FirstType1 & SecondType2 & {   //it is the combination of 1st and 2nd type and 3rd
    card?: number;  //optional
}

let hello3: ThirdCombinedType = {
	name: "abin",
	age: 21
};

