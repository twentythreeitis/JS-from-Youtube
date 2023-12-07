const score = 400;
console.log(score);    //400

const balance = new Number(100);
console.log(balance);     //[Number: 100]  Created an object of number type.

/*----Some Number Methods ----------*/

console.log(balance.toString());   //100 but with the type string.
console.log(balance.toFixed(2));   //100.00   brings upto 2 decimal places.

const otherNumber = 23.8976;

console.log(otherNumber.toPrecision(3));  // Give round off value till 3 digits.