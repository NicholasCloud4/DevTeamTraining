const x = 11;
if(x === 10){
    console.log("x is 10");
} else if (x > 10){
    console.log("x is greater than 10");
} else{
    console.log("x is less than 10");
}

const y = 11;
if(x > 5 && y > 10){
    console.log("x is more than 5 or y is more than 10");
}

//turnery operator
const color = x > 10 ? "red" : "blue";
console.log(color);

//switches
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue");
        break;
}

//functions
function addNums(num1, num2){
    return num1 + num2;
}

console.log(addNums(4, 2));

//Constructor Function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Class
/*class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
*/

//Instantiate object
const person1 = new Person("Hello", "Hi", "4-3-1999");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

