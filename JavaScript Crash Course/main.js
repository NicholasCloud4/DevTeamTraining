
// Comment 

/*
Multi-Line
Comments
*/

console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// let, const
let score;
score = 7;
console.log(score);

// String, Numbers, Boolean, null, undefined
const name = "Nicholas";
const age = 21;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof y);

//Concatenation
console.log("My name is " + name + ", and age is " + age);
// Template String - using Backtick
console.log(`My name is ${name}, and I am ${age}`);

const s = "Hello World";
console.log(s.length);
console.log(s.substring(0,5).toLocaleUpperCase());
const v = "technology, computers, it, code";
console.log(v.split(", "));

//Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(numbers);
const fruits = ["apples", "oranges", "pears", "bananas"];
fruits[4] = "strawberries"
fruits.push("mangoes");
console.log(Array.isArray(fruits));
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.indexOf("oranges"));

//Object
const person = {
    firstName: "Nicholas",
    lastName: "Dhannie",
    age: 21,
    hobbies: ["Art", "YouTube", "Sports"],
    address: {
        street: "1234 i dont know anymore",
        city: "NYC",
        state: "New York"
    }
}
person.email = "myemail@gmail.com"
console.log(person.firstName, person.hobbies[1], person.address.city, person.email);

const todos = [
    {
        id: 1,
        text: "Wash dishes",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting",
        isCompleted: true
    },
    {
        id: 3,
        text: "Car",
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For Loop
for(let i = 0; i < 5; i++){
    console.log(`For Loop: ${i}`);
}

//While Loop
let j = 0;
while(j < 5){
    console.log(`While Loop: ${j}`);
    j++;
}


const todos2 = [
    {
        id: 1,
        text: "Wash dishes",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting",
        isCompleted: true
    },
    {
        id: 3,
        text: "Car",
        isCompleted: false
    }
];

// For of Loop
for(let todo of todos2){
    console.log(todo.text);
}

//forEach
todos2.forEach(function(todo){
    console.log(todo.text);
});

// map
const todoText = todos2.map(function(todo){
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos2.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);
