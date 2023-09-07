// Generics in TypeScript allow you to create reusable components, functions, or classes that can work with different types
// while maintaining type safety. 
//eg1:generice
const score: Array<number> = [];
const names: Array<string> = [];

// ----------------------------------------

// this function accept and return either number or a boolean value
function identityOne(val: number | boolean): number | boolean {
	return val;
}

// this function accept and return any value,we dont exactly know the type //using any is not recomendable
function identityTwo(val: any): any {
	return val;
}

// ----------------------------------------

//eg2: generice
// here once we pass a value type here "<Type>" ,that value type is locked
// ie,if we pass number in "<>" then parameter and return type is also number
function identityThree<Type>(val: Type): Type {
	return val;
}

identityThree(3) //while hover ,it says fn is going to be accept and return a string 
identityThree("3")

function identityFour<T>(val: T): T {
	return val;
}

// we can define out own type

interface Bottle{
    brand: string
    type: number 
}

console.log(identityFour<Bottle>({brand: "adidas",type: 0}));

//-----------------------------------------------

//to take types as array in generic type
function getSearchProducts<T>(products: T[]):T{
    // do some database operations
    const index = 3
    return products[index]
}

// arrow functions in generic type
const getMoreSearchProducts = <T>(products: T[]):T =>{
    // do some database operations
    const index = 4
    return products[index]
}


// example using promise

let promise:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolve string data');
    },3000);
})

promise.then((data)=>{
    data.split('')  //it shows " Property 'split' does not exist on type 'unknown'. " if we dont specify 'Promise<string>'
})