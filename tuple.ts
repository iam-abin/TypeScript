// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.

// const items:(string | number | boolean)[] = ["bag","pen",1000,true,"bottle",500]  // not a tuple, here order is not a problem

let user:[string, number, string, boolean ] = ["abin", 21, "abin@gmail.com", true];
let rgb:[number,number,number] = [255,90,55] 

// using type
type User = [string,number];
const newUser: User = ["amal",22];

// but here if use type is a problem is that,we can use array methods here. we need to avoid that
newUser.push("kajfkja")
console.log(newUser);

export {}