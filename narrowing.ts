function detectType(value: string | number) {
	if (typeof value === "string") {
		return value.toUpperCase();
	}
	return value + 3;
}

function provideId(id: string | null) {
	if (!id) {
		console.log("plese provide id");
		return;
	}
	id.toLowerCase();
}

// ------------------
// The "in" operator in narrowing

interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	if ("isAdmin" in account) {
		return account.isAdmin;
	}
}

// The "instance" operator in narrowing - it checks whether the object is an instance of some classes
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}
