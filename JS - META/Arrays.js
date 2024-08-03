//Arrays are Objects

let fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

fruits.pop(); // removes last item in array
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three){
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    //console.log(arr);
    return arr;
}
//arrayBuilder("apple", "orange", "banana");
let simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);