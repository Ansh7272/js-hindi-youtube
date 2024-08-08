// singleton  : any object made by constructors
// Object.create

// object literals

const mySym = Symbol("drdct")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
// to use as a symbol :  [mySym]
    [mySym]: "mykey1", 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)   : to stop any updatation
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());