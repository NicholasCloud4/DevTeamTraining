//!!!!type tsc in terminal and lookk at the code change in index.js

/*
console.log("Hello World");

let age: number = 20;
if(age < 50)
    age += 10;
console.log(age);
*/

/*
TypeScript knows what type the variables are without having to state what it is.
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
*/

/*
If I do not initalize the variable it willl be of type: any
DANGEROUS!!!
let level;
level = 1;
level = 'a';
*/

/*
let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 'a';
*/

// Tuples
//let user: [number, string] = [1, 'Nicholas'];

//Enums
/*
const enum Size {Small = 's', Medium = 'm', Large = 'l'};
let mySize: Size = Size.Small;
console.log(mySize);
*/

/*
function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear < 2022){
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(40_000);
*/

/*
OBJECTS
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Nicholas",
  retire: (date: Date) => {
    console.log(date);
  },
};
*/

/*
Making it better
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Nicholas",
  retire: (date: Date) => {
    console.log(date);
  },
};
*/

/*
UNION TYPES
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");
*/

/*
INTERSECTION TYPES
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
*/

/*
//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
*/

/*
NULLABLE TYPES
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet("nicholas");
*/

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday.getFullYear());
