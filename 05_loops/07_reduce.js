/*--------------REDUCE IN JS-------------------------------*/
const myNums = [1,2,3,4];

// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal : ${curVal}`);
//     return acc+ curVal
// }, 0)

//In the form of Arrow function

// const myTotal = myNums.reduce ( (acc,curVal) => acc+curVal, 0)

// console.log(myTotal);            
/* 
acc: 0 and curVal : 1
acc: 1 and curVal : 2
acc: 3 and curVal : 3
acc: 6 and curVal : 4
10
*/

//Shopping Cart

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "Java Course",
        price: 1199
    },
    {
        itemName: "Python Course",
        price: 1499
    }
]

//Now you have to add the total prices of all the courses.

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price,0);
console.log(totalPrice);