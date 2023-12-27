// {} = scopes
// var c = 300
let a = 300


if(true){
    let a = 10
    const b = 20
    var c = 30
    // c = 30
    // console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Deepak"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "Deepak"
    if (username === "Deepak") {
        const website = " Portfolio"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ****************** interesting ******************

console.log(addOne(1));

function addOne(num) {
    return num + 1
}

// addOne(1)


// addTwo(2)  wrong  //hosting

const addTwo = function(num){
    return num + 2
}

addTwo(2)