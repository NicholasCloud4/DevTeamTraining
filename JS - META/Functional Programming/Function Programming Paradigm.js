/*
"There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.
In functional programming, we use a lot of functions and variables.
 */
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

/*
When writing FP code, we keep data and functionality separate and 
pass data into functions only when we want something computed.
 */
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

/*
Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method
*/

let virtualPet = {
    sleepy: true,
    nap: function(){}
}
console.log(virtualPet)


/*
In OOP, methods update properties stored in the object instead of generating new return values.

For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.

However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?
*/
//creating an object
var virtualPet2 = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet2.sleepy) // true
virtualPet.nap()
console.log(virtualPet2.sleepy) // false



function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
addTwoNums(getNumber(), getNumber())
addTwoNums(getNumber(), getNumber())