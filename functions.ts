function addTwo(num: number) {
	return num + 2;
}

function getUpperCase(val: string) {
	return val.toUpperCase();
}

function payMent(name: string, email: string, isPaid: boolean) {
	return "payment done";
}

//function with default parameter
function payMentDefaultParams(
	name: string,
	email: string,
	isPaid: boolean = false
) {
	console.log("payment done");
}

// function with a return type
function paymentWithReturn(
	name: string,
	email: string,
	isPaid: boolean
): string {
	return "do payment";
}

function multiplyTwoNums(num1: number, num2: number): number {
	return num1 * num2;
}

// two return based on a condition
function positiveOrNegative(num: number): string | number {
	if (num < 0) {
		return "negative number";
	} else {
		return num;
	}
}

// arrow function
const getHello = (name: string): string => {
	return `Hello ${name}`;
};

const getHello2 = (name: string): void => {
	console.log(`Hello ${name}`);
};

// never type
// Some functions never return a value
//  In this return type, this means that the function throws an exception or terminates execution of the program
function fail(message: string): never {
	throw new Error(message);
}

console.log(fail("no"));

export {};
