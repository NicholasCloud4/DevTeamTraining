let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.5;

function convertCurrency(amount, rate){
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);


function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

console.log(objectMaker(20));
console.log(doubleIt(10).toString());