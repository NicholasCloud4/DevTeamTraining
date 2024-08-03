// Constructor Function
let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear; 
    this.calcAge = function (){
        let age = new Date().getFullYear() - this.birthYear;
        console.log("age: ", age);
    }
}

let john = new Person("John", "Male", 2000);
console.log(john)
john.calcAge();

console.log();
let rex = new Person("Rex", "Male", 2001);
console.log(rex)
rex.calcAge(); 