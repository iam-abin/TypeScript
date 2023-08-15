interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	startTrial(): string; 
	getCoupon(couponName: string, price: number): number;
}

// we can reopen or add new field to interface but not possible in type
interface User {
    gitHubToken:string
}

// we can also use extend keyword
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const abin:User = {
    dbId: 22,
    email: "abi@gmail.com",
    userId: 2211,
    gitHubToken:"github3223",
    startTrial:()=>{
       return "trial started"
    },
    getCoupon: function (couponName:"onam",price:1000){
        return 1000
    }
}
abin.email = "abin@gmail.com"
console.log(abin);

const admin:Admin = {
    role: "admin",
    dbId: 100,
    email: "s@a.com",
    userId: 22,
    startTrial: function (): string {
        return "hello"
    },
    getCoupon: function (couponName: string, price: number): number {
        return 123
    },
    gitHubToken: "adf"
}

// difference between interface and type : read official typescript documentation

export {}