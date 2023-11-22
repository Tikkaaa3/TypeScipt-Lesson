type myObj = { user: string; isPaid: boolean } 
function createUser(a: myObj) {
    if (a.isPaid) {
        return a.user;
    }
}

createUser({user: "Tikka", isPaid: true});

function createCourse():{name: string, price: number}{
  return {name: "TypeScript Course", price: 129}
}

type Car = {
  model: number;
  brand: string;
}

function addCar(car: Car): Car{
  return {model:car.model, brand:car.brand}
}

addCar({model:2020, brand:"Audi"});



type User = {
  readonly  _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
}

let myUser: User = {
  _id: "123",
  name: "Tikka",
  email: "tikkaaa@gmail.com",
  isActive: true,
}

myUser.email = "aaa@gmail.com";

type cardNumber = {
  cardNumber: number;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
  cvv: number;
}

const cardCreate = (det:cardDetails):cardDetails => {
  return {
    cardNumber: det.cardNumber,
    cardDate: det.cardDate,
    cvv: det.cvv,
  }
}

cardCreate({cardNumber:113, cardDate:"12-11-23", cvv: 123});


export {}
