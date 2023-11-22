function detectType(val: string | number) {
    if (typeof val === 'string') {
        return val.toLowerCase
    }
    return val + 3
}
 function provideId(id: string | null) {
    if (!id) {
        console.log('please give us your id')
        return 
    }
    id.toLowerCase()
 }


 function printAll(strs: string | string[] | null) { 
  // it says dont do this bc it doesnt cover the situation if sting is empty ''
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount (account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
    return false
}

function logValue(x: Date | string) {   // you can use instance of with everything you can use with new => new class object etc.
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
  } else {
    console.log(x.toUpperCase());
               
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {  // if function returns true, you assign pet as a Fish
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return 'fish food'
    }
    else {
        return 'bird food'
    }
}

interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":{
      return Math.PI * shape.radius ** 2;
    }
    case "square":{
      return shape.sideLength ** 2;
    }
    default:{                          // this is for if any other interface is added to the type Shape, it will automatically throw us an error
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    }
  }
}
