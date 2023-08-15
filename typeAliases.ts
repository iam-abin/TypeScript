// if to want to use the same type more than once so, we can refer to it by a single name.

type MyString = string; //it is allowed but usually not using

type User = {
	name: string;
	email: string;
	isActive: boolean;
};

//when we receives a value and return a value, these values should contain everything defined in User type
function createUser(user: User): User {
	console.log(user.name);
	return { name: "abin v", email: "abinv@gmail.com", isActive: true };
}

createUser({ name: "abin", email: "abin@gmail.com", isActive: true });

export {};
