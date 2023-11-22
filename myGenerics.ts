const score: Array<number> = []
const names: Array<string> = []

function identity1(val: boolean | number): boolean | number {
    return val
}

function identity2(val: any): any {
    return val 
}

function identity3<Type>(val: Type): Type {
    return val
}

function identity4<T>(val: T): T {   // You can use whatever u want: Type, T, A...
    return val
}

interface Bottle{
brand: string,
type: number
}

identity4<Bottle>({brand: 'water', type: 23})  // this is how you pass an argument to this kind of function

function getSearchProducts<T>(products: Array<T>): T { // you take T array and return one of the values in T array
    console.log('heheyt')
    return products[0]
} 

const getMoreSearchProducts = <T>(products: T[]):T => { // you can use <T,> syntax to not to mix generics with react components etc.
    return products[1]
}

interface Database{
connection: string,
username: string,
password: string,
} 

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

interface Quiz {
    name:string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T,> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}


