// An abstract class is a class that cannot be instantiated on its own; it serves as a blueprint for other classes.
// it is meant to be extended by subclasses that provide concrete implementations for its abstract methods.
// An abstract method or function is a method declared in an abstract class that doesn't have an implementation in the abstract class itself.
// "super" keyword is used to call methods or constructors of the parent class.

abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {

    }

    abstract getSepia(): void;

    //we can override or use after creating instance getReelTime() in child class
    getReelTime():number{  
        // some complex calculations
        return 8
    }

}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public focalLength:number) {
        super(cameraMode, filter);
	}

    getSepia(): void {
        console.log("Sepia");
    }

}

const take = new Instagram("test","test",4);
console.log(take.getReelTime());

