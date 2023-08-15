class User {
	public name: string;
	public email: string;
    private userId:number;
    readonly city:string = "jaipur";
    constructor(name:string ,email:string,userId:number){
        this.name = name;
        this.email = email
        this.userId = userId
    }
}

// above class can also be write like,
class User2{
    readonly city:string = "jaipur";
    constructor(public name:string,public email:string,private userId:number){

    }
}


const abin = new User("abin","abin@gmail.com",1234);
console.log(abin.name);
