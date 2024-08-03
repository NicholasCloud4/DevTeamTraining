function addTwoNums(a, b){
    
    try {
        console.log(a + b);
        if(typeof(a) != "number"){
            throw ReferenceError("the second argument is not a number");
        }else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        }else{
            console.log(a + b);
        }
    } catch (error) {
        console.log("ERROR! : ", error);
        
    }
}

addTwoNums(5, "5");
console.log("it still works")



/*
Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

How would you then refactor the function given below with defensive programming in mind?

For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

The length of the word parameter cannot be less than 2.

The length of the match parameter must be 1.

The type of both the word and the match parameters must be string.
*/
function letterFinder(word, match) {
    let condition1 = typeof(word) == "string" && word.length >=2
    let consition2 = typeof(match) == "string" && match.length == 1
    if(condition1 == true && consition2 == true) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else{
        console.log("Please pass correct argument to the function")
    }
}

letterFinder(1,2);
letterFinder("cat", "c")

