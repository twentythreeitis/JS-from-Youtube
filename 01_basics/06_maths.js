const score = 400;
console.log(score);    //400

const balance = new Number(100);
console.log(balance);     //[Number: 100]  Created an object of number type.

/*----Some Number Methods ----------*/

console.log(balance.toString());   //100 but with the type string.
console.log(balance.toFixed(2));   //100.00   brings upto 2 decimal places.

const otherNumber = 23.8976;

console.log(otherNumber.toPrecision(3));  // Give round off value till 3 digits.

/*------------Maths -------------*/

console.log(Math);
console.log(Math.abs(-4));       //4
console.log(Math.round(4.6));     //5
console.log(Math.ceil(4.2));     //5
console.log(Math.floor(4.7));      //4
console.log(Math.min(4,3,6,8));    //3
console.log(Math.max(4,3,6,8));    //8

//Math.random
console.log(Math.random());
console.log(Math.round(Math.random()*10) + 1);

//Formula for printing any random number between a maximum and minimum number.

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);
 