let userId: number | string = 33;
userId = "33";

type User = {
  name: string;
  id: string | number;
}

type Admin = {
  adminName: string;
  id: string | number;
}

const createUser = (user: User | Admin): User | Admin => {
  if ('name' in user) {
    // It's a User
    return { name: 'blabla', id: 333 };
  } else if ('adminName' in user) {
    // It's an Admin
    return { adminName: 'BLABLA', id: '13' };
  } else {
    // It's neither User nor Admin
    return { name: '', id: '' };
  }
};


const idCheck = (id: number | string): string => {
  if (typeof id === "number") return "number"
  if (typeof id === "string") return "string"
  else return ""
}


//array

const data1: string[] | number[] = [1, 2, 3]; 
const data2: string[] | number[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]

let data4 = new Array;
data4 = data4.concat(data1).concat(data2).concat(data3);
console.log(data4);

let pi: 3.14;
pi = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "window"


export{}
