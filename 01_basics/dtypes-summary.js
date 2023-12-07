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
console.log(typeof(myObj));  //Object
console.log(typeof(myFunction));   //Function Object
console.log(typeof(heros));   //Object
/*-----------------------------------------------------/

/*Jitnebhi reference data types h unka typeof "OBJECT" hi hota h except 
functions ka.. unka typeof "FUNCTIONS OBJECT" hota.*/

