// for each

const coding = ["js","ruby","java","cpp","python"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (value) => {
//     console.log(value);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "Java",
        langFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})