const user = {
    username: "Deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "Deepak"
//     console.log(this.username);
// }

// one()

// const chai = function(){
//     let username = "Deepak"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Deepak"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "deepak"})

console.log(addTwo(3,3));

// const myArray = [10,20,30]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())