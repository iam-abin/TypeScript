type User = {
	readonly _id: number;
	name: string;
	email: string;
	isActive: boolean;
	creditCardDetails?: number; //here ? indicates optional  //because some user may dont have credit card
};

let myUser: User = {
	_id: 1234,
	name: "abin",
	email: "abin@gmail.com",
	isActive: false,
};

myUser.email = "abinv@gmail.com";
myUser._id = 4455; //not possible because readonly

console.log(myUser);

export {}