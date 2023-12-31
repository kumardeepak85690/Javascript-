// const userEmail = "dk@gmail.com"
// const userEmail = ""
const userEmail = []

// if(userEmail){
//     console.log("got mail");
// }
// else{
//     console.log("wrong");
// }

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan 

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }




// Nullish Coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 15
// console.log(val1);

// val1 = null ?? 10 ?? 15
// console.log(val1);


// Terniary Operator
// condition ? true : false

const iceCream = 100
iceCream <= 80 ? console.log("less then 80") : console.log("greater then 80");