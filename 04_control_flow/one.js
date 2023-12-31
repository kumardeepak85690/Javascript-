// if 
// condition is true then go to the inner case else dont go

const isUserLoggedIn = true
const temperature  = 9

// if(temperature < 10){
//     console.log("less then 10");
// }
// else{
//     console.log("greater then 10");
// }

// < , > , <= , >= , == , != , === , !==


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// } 

// const balance = 900

// if (balance > 500) console.log("test"), console.log("test2");  //dont use

// if(balance < 500){
//     console.log("less then 500");
// }
// else if(balance < 750){
//     console.log("less then 750");
// }
// else if(balance < 1000){
//     console.log("less then 1000");
// }
// else {
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged In");
}