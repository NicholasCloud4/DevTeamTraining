/*const {rename} = require("fs");

rename("hi.txt", "hello.txt", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File has been renamed!");
});*/

const {unlink} = require("fs");

unlink("hello.txt", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File deleted!");
});
