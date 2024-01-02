// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}

const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

// for (const key of myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

