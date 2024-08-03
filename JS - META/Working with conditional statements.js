// IF ELSE
let result = 80;

if (result > 50){
    console.log("You passed the test");
} else {
    console.log("You did not pass the test")
}


// IF, ELSE IF, ELSE
let place = "first"

if(place == "first"){
    console.log("GOLD")
} else if(place == "second") {
    console.log("SILVER")
} else if(place == "third"){
    console.log("BRONZE")
} else{
    console.log("GET GOOD");
}

//SWITCH
let placeAgain = "second";

switch (placeAgain) {
    case "first":
        console.log("GOLD")
        break;
    case "second":
        console.log("SILVER")
        break;
    case "third":
        console.log("BRONZE");
        break;

    default:
        console.log("GET GOOD");
        break;
}
