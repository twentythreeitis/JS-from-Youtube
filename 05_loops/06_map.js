const myNum = [10,9,8,7,6,5,4,3,2,1];

//We have to add 10 to each number present in this array.

/*Let's try to do it by using for loop, for-in loop, for-of loop, forEach loop,
  filter() and then finally, using map() method.
*/

/*------------------------------------------------------------*/
//(I) Using for loop

// for (let i = 0; i < myNum.length; i++) {
//     const element = myNum[i];
//     console.log(Number(element) + 10);
// }

// 20 19 18 17 16 15 14 13 12 11

/*-----------------------------------------------------------*/
//(II) Using for.in loop

// for (const key in myNum) {
//     console.log(Number(myNum[key])+10);
// }

//20 19 18 17 16 15 14 13 12 11

/*------------------------------------------------------------*/
// (III) Using for of loop

// for (const num of myNum) {
//     console.log(Number(num)+10);
// }

//20 19 18 17 16 15 14 13 12 11

/*------------------------------------------------------------*/
// (IV) Using forEach loop

// myNum.forEach((num) =>{
//     console.log(num+10);
// })


//20 19 18 17 16 15 14 13 12 11

/*forEach me const varname = array.forEach( (key) => {
    return ....... doesn't work
})
*/

/*------------------------------------------------------------*/
//(V) Using filter() method we cannot modify but only filter out given array

// const addTen = myNum.filter( (num) => {return (num+10)});
// console.log(addTen);

/*------------------------------------------------------------*/
//(VI) Using map()

// const addTen = myNum.map( (num) => num + 10);
// console.log(addTen);

/* 
[
  20, 19, 18, 17, 16,
  15, 14, 13, 12, 11
]
*/


/*------------------------------------------------------------*/
//Chaining of map()
// const newNum = myNum
//   .map((num) => num * 10 )
//   .map( (num) => num + 3)
//   .filter( (num) => num >= 40)

// console.log(newNum);

/*
[
  103, 93, 83, 73, 63,
   53, 43
]
*/