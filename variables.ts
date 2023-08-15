let greeting: string = "hello abin";
let userId: number = 1234;
let price: number = 599.65;
let hasNAme: boolean = true;
let nothingHere: null = null;
let nothing: undefined = undefined;

let value: any = 10;
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
value = "hello";
console.log(value);

export {};
