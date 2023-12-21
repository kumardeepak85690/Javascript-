// Primitive : 7 types

    // String  = string
        let name = "Deepak"

    // Symbol = symbol
        let id = Symbol('4961')

    // BigInt = bigint
        let bigNum = 49610000000n

    // Boolean = boolean
        let loggedIn = true

    // Number = number
        let num = 123

    // null  = object
        let value = null

    // undefined = undefind
        let roomTemp = undefined


/* *************************************************************************************** */


// Reference  (Non Primitive)

    // Array
        const heros = ["thor", "ironMan", "spiderMan"];

    // Object
        let myObj = {
            name: "Deepak",
            age: 23
        }

    // Function
        const myFun = function(){
            console.log("hello world");
        }


/* **************************************************************************** */


// Stack  = Primitive ,  Heap = Non-Primitive

let myChannel = "Deepak"
let anotherChannel = myChannel

anotherChannel = "Kumar"

console.log(myChannel);
console.log(anotherChannel);

let userOne = {
    email: "user@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "deepak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

