class User2 {
	protected _courseCount = 1;
	readonly city: string = "jaipur";
	constructor(
		public name: string,
		public email: string,
		private userId: number
	) {}

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get getCourseCount(): number {
		return this._courseCount;
	}

    // there is no return type for setters
	set setCourseCount(count: number) {
		if (count <= 1) {
			throw new Error("Course count should be more than 1");
		}
		this._courseCount = count;
	}

    // we cannot access private methods and variables from outside the class
    private deleteCOunt(){
        console.log("count deleted");
    }
}

class SubUser extends User2{
    changeCount(){
        this._courseCount = 4
    }
}

const abin = new User2("abin", "abin@gmail.com", 1234);
