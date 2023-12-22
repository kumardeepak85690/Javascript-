// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Deepak",
    "full Name": "Deepak Kumar",
    // mySym: "myKey1", //wrong way string
    [mySym]: "myKey1",  //symbol 
    age: 23,
    location: "Ludhiana",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

// JsUser.email = "deepak@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "deepak@Microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());