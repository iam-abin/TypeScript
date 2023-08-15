// it will help us to avoid any keyword

let score: number | string = 40;

score = 30;
score = "60"

// ----------------------------------------------------

type FirstType = { name: string };
type SecondType = { age: number };

type ThirdCombinedType = FirstType | SecondType

let hello: ThirdCombinedType = {name: "abin",age:20};
let hello2: ThirdCombinedType = {name: "abin"};  //dont show error if any one type is not used

// ---------------------------------------------------------

function checkDataType(data: number | string ):void{
    if(typeof data === "string"){
        console.log(`${data} is a string`);
    }else{
        console.log(`${data} is a number`);
        
    }
}

checkDataType("hellooo");
checkDataType(77)

// -----------------------------------------------------

// union in arrays
const items:(string | number | boolean)[] = ["bag","pen",1000,true,"bottle",500]

// -----------------------------------

// here in "placesNearMe" if we assign any other value than we specified it will show error 

let placesNearMe: "ernakulam" | "kottayam" | "pathanam thitta";
placesNearMe = "kottayam" 
placesNearMe = "idukki" //error 

export {}