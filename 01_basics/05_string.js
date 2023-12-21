const name = "Deepak"
const repoCount = 25

// console.log(name + repoCount);

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('Deepak')

// console.log(gameName[0]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-4,3)
// console.log(anotherString);

const newString1 = "   deepak   "
// console.log(newString1);
// console.log(newString1.trim());

const url = "https://deepak.com/deepak%20kumar"

console.log(url.replace('%20','-'));

console.log(url.includes('deepak'));

console.log(url.includes('ravi'));

console.log(gameName.split('e'));