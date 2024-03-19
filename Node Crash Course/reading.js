//const fs = require("fs");
/*fs.readFile("hi.txt", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});*/

/*try {
    const data = fs.readFileSync("hi.txt", "utf8");
    console.log(data);
} catch (error) {
    console.error(error);
    
}*/

const {readFile, readFileSync} = require("fs");
try {
    const data = readFileSync("hi.txt", "utf8");
    console.log(data);
} catch (error) {
    console.error(error);
    
}


console.log("log from outside");