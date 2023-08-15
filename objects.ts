const user = {
	name: "abin",
	email: "abin@gmail.com",
	isActive: true,
};


function createUser({ name, isActive }: { name: string; isActive: boolean }) {
	console.log(name);
	console.log(isActive);
}

// there is a weird behavior in object in ts that is,
// if we pass user object variable contailnig 3 propertires to createCser fn ts not showing error
createUser(user);

// but if we pass an object contailnig 3 propertires to createCser without assigning to a variable fn not showing error as
// does not exist type
// it will work
createUser({ name: "abin", isActive: true });
// it won't work
createUser({ name: "abin", isActive: true, email: "abin@gmail.com" });

// ------------------------------------------------------------------------------------------------------------------

// we can specy return type of a function as object as
function createUser2(): {} {    //here {} is object type
	return {};
}

function createUser3({ name, isActive }): { name: string; isActive: boolean } {
	return { name: "abin v", isActive: true };
}

createUser3({ name: "abin", isActive: false });

export {};
