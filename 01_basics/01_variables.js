const accountId = 4961
let accountEmail = "dk705437@gmail.com"
var accountPassword = "85690"  //dont use
accountCity = "Ludhiana" //dont use
let accountState; //undefined

//accountId = 2 //not allowed

accountEmail = "dk85@gmail.com"
accountPassword = "12345"
accountCity = "mohali"

console.log(accountId);

/*
Prefer not to use var
bacause of issuse in block scope anf functional scope
*/

console.table(
    [
        accountId,
        accountEmail,
        accountPassword,
        accountCity,
        accountState
    ]
)