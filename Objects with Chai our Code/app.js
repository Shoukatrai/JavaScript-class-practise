const mySymb = "key1";
const JsUser = {
    name: "Shoukat",
    "fullName":"Shoukat Rai",
    [mySymb]:"my key2",
    age: 20,
    location: "Karachi",
    email: "raishoukat033@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday" , "sunday"],
};



JsUser.greeting = function(){
    console.log("Hello Class")
    console.log(`Hello ${this.name}`)
}

JsUser.nimaste = function(){
    console.log(`Nimaste ${this.fullName}`)
}

console.log(JsUser.greeting())
console.log(JsUser.nimaste())

// console.log(JsUser[mySymb]);
// console.log(JsUser["age"]);
// console.log(JsUser["location"])
// console.log(JsUser["lastLoginDays"])