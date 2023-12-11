/*Let's suppose we want user to sign in via correct email */
// const userEmail = "aryan@gmail.com";

// if(userEmail){
//     console.log("User has signed in!!");
// } else {
//     console.log("User has not signed in!!");
// }

//This will print "User has signed in!!". But what if the user input enter an 
//array or an empty string.

const userEmail = "";
//in the case of "" empty string will act as a "false" value, 
// and [] empty array would act as a "true" value.

// if(userEmail){
//     console.log("User has signed in!!");
// } else {
//     console.log("User has not signed in!!");
// }

//This is not good methed to accept user email. Here comes some other values 
//which acts as falsy values and truthy in Javascript.

/*---------------FALSY VALUE -------------------------*/

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/*--------------TRUTHY VALUES ----------------------*/

// "0", 'false', [], {}, function(){}

//To check if the array is empty or not?
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//To check if the object is empty or not?
const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//false == 0 => true
//false == ""  => true
//0 == ""  => true


/*-----NULLISH COALESCING OPERATOR (??) null undefined-------*/

//works as a fallback to avoid error//
let val1;
// val1 = 5 ?? 10;         //5
// val1 = null ?? 10       //10
// val1 = undefined ?? 15     //15
val1 = null ?? 10 ?? 20      // 10 first value after null
console.log(val1);     

//-------TERNARY OPERATOR----------//

// condition ? true : false;