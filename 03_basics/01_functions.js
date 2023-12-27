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
console.log(loginUserMessage())


