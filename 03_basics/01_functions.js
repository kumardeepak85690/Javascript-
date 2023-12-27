function sayMyName()
{
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("k");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

const result = addTwoNumbers(4,4)
// console.log("Result: ",result);


function loginUserMessage(username /* = "sam*/) {
    if(!username /*=== undefined */ ){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepak"))
// console.log(loginUserMessage())

function calculateCartPrice(/*val1,val2,*/...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,300,400,500));


const user = {
    username: "Deepak",
    password: 1234 
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and password is ${anyObject.password}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    password: 9876
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300]));

