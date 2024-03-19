//const{writeFile, writeFileSync} = require("fs");

//const newContent = "This is some new text";

/*writeFile("hi.txt", newContent, (err)=> {
    if(err){
        console.log(err);
    }
    console.log("Content written!");
});*/

/*writeFile("hi.txt", newContent, {flag: "a"}, (err)=> {
    if(err){
        console.log(err);
    }
    console.log("Content written!");
});*/

const {appendFile} = require("fs");
const newContent = "\nThis is some more new text";
/*try {
    writeFileSync("hi.txt", newContent);
    console.log("Content Written!");
} catch (error) {
    console.error(error);
}*/
appendFile("hi.txt", newContent, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Content Written!");
});