//Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*JavaScript is dynamically typed laguage because the data types of variables
are determined by the value they hold at runtime and can change throughout 
the program*/


//Reference(Non-primitive)

// Array, Objects, Functions

//Array
const heros = ["Shaktiman", "Naagraj", "Doga"]; 

//Object
let myObj = {
    name : "Aryan",
    age : 22
}

//Function

const myFunction = function(){
    console.log("Hello World");
}
/*-----------------------------------------------------*/
// console.log(typeof(myObj));  //Object
// console.log(typeof(myFunction));   //Function Object
// console.log(typeof(heros));   //Object
/*-----------------------------------------------------*/

/*Jitnebhi reference data types h unka typeof "OBJECT" hi hota h except 
functions ka.. unka typeof "FUNCTIONS OBJECT" hota.*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++//
//MEMORY IN JAVASCRIPT

//Stack (Primitive), Heap (Non-primitive)

/*Stack memory stores primitive data types like strings, numbers, etc and
 when we assign them to a different new variable, the value in the primary 
 variable is not changed and just the new variable value is changed.

 [Based on copying the primary data type into the new variable and not 
    modifying the original one]
*/

//Example//
let myYoutube = "The Reverb 27";

let myUserName = myYoutube;   //Here the copy of myYoutube is given not the reference//
                              // Therefore, original myYoutube remains the same//
myUserName = "Coding for life";

// console.log(myYoutube);   //The Reverb 27
// console.log(myUserName);   //Coding for life

/*Heap memory stores reference data types in JS. When we assign them to a new variable, the value of
primary(original) and secondary variable changes together. There is no copying infact both the variables
holds the memory reference of same data type. [One changed, other also change]*/

//Example by taking Object
let userOne = {
    name : "Aryan",
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;   //same reference in memory not copy

userTwo.email = "aryan@gmail.com";

console.log(userOne);  //both of the userOne and userTwo will change its value.
console.log(userTwo);

//{ name: 'Aryan', email: 'aryan@gmail.com', upi: 'user@ybl' }
//{ name: 'Aryan', email: 'aryan@gmail.com', upi: 'user@ybl' }

