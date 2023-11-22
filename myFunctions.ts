function addTwo(num: number): number {
    return num + 2
}

addTwo(1);

const helloFunc = (message: string): string => {
    return message
}

function signUp(name: string, password: string, isPaid: boolean) {return "Hello"};

signUp("Emre","Tikka",true);

const logIn = (name: string = "your name", password: string = "your password", isPaid: boolean = false) => {}

const heroes = ["spiderman", "batman", "thor"];

heroes.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw Error(errmsg);
}

export{}
