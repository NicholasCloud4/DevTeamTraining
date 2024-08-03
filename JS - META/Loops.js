// FOR LOOP
for (let i = 1; i < 6; i++) {
    console.log(i);
    
}
console.log("Happy New Year!")

for(let i = 5; i > 0 ; i--){
    console.log(i);
}
console.log("Counted down")

//WHILE LOOP
let counter = 5
while (counter > 0) {
    console.log(counter);
    counter -= 1;
}
console.log("KA BOOM")

let counter2 = 1
while (counter2 < 6){
    console.log(counter2)
    counter2 += 1;
}
console.log("YA DONE")

let year = 2024;
while(year <= 2030){
    console.log(year);
    year = year + 1;
}

console.log("NEW FOR NESTED LOOP")
for(let i = 2024; i < 2030; i++){
    console.log(i)
    for(let j = 1; j < 4; j++)
        console.log(j);
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}



for (let i = 1; i < 11; i++){
    if(i == 1){
        console.log("GOLD MEDAL")
    } else if(i == 2){
        console.log("SILVER MEDAL")
    } else if(i == 3){
        console.log("BRONZE MEDAL")
    }else{
        console.log(i)
    }
    
}




for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}
