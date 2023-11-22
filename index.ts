// class User {
//     email: string
//     name: string
//     private readonly city: string = "Stanbul";  // if you don't make it private everything will be seen as public by default
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;   
//     }
// }

class User {
    protected _courseCount = 1;  // can only be accessable in classes
    private readonly city: string = "Stanbul";  // if you don't make it private everything will be seen as public by default

    constructor(
        public email: string,
        public name: string
    ){
    }

    get getAplleEmail(): string {
       return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount

    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1!")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User { // it will not take private ones from User
    isFamily: boolean;
    changeCourseCount() {
        this._courseCount = 0
    }
}

const tikka = new User("aa@gml.com","tikka")
