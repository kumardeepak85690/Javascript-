const myNum = [1,2,3]

// const myTotal = myNum.reduce( function (acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "cpp course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "android course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);