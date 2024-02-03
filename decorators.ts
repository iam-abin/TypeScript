// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverse("hello"));

// above function using decorators

function split(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // create a reference to the original method
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        args[0] = args[0].split('');
        originalMethod.apply(this, args)

    }
}

function reverse(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // create a reference to the original method
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        args[0] = args[0].reverse();
        originalMethod.apply(this, args)

    }
}


function join(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // create a reference to the original method
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        args[0] = args[0].join('');
        originalMethod.apply(this, args)

    }
}


class StringManager{

    @split
    @reverse
    @join
    printStr(str: string){
        // SPLIT
        // REVERSE
        // JOIN
        console.log(str)
    }
}