const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
try {
    const user = await User.create ({
        name: "Nicholas", 
        age: 22,
        email: "Test@gmail.com",
        hobbies: ["Weight Lifting", "Bowling"],
        address: {
            street: "Main St"
        },
    })
    await user.save()
    console.log(user)
   
    //const user = await User.findById("65fb49000d81cafd17677199")

    /*const user = await User.where("age")
    .gt(12)
    .where("name")
    .equals("Kyle")
    .limit(1)
    .populate("bestfriend")*/
    console.log(user)
} catch (e) {
    console.log(e.message)
}
}

