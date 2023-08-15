// Generics in TypeScript allow you to create reusable components, functions, or classes that can work with different types while maintaining type safety. 

interface Database{
    connection:string
    username:string
    password:string
}

function anotherFunction<T, U extends Database>(valueOne:T, valueTwo:U):object {
    return {
        valueOne,
        valueTwo
    }
}
anotherFunction(10,{connection: "3243wdfd",username: "abi",password: "123"})


// -----------------
// <T> indicates it is a generic class

interface Quiz{
    name:string
    type:string
}

interface Course{
    name:string
    author:string
    subject:string
}

class Sellable<T>{
    public cart:T[] = [];
    
    addToCart(products: T){
        this.cart.push(products)
    }
}