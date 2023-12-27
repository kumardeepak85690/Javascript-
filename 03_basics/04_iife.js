// Immediately Involved Function  Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }()


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED 2`);
})();

( (name) => {
    console.log(`DB CONNECTED 3 ${name}`);
})("Deepak")