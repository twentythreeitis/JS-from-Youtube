/*-------------STRING TO NUMBER----------------------*/

let score = "33"

console.log(typeof score);   //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);   //number
console.log(valueInNumber);  //33

/*-----------------MIX STRING TO NUMBER----------------*/

let mix = "33abc"
console.log(typeof mix);  //string

let checkNumber = Number(mix);
console.log(typeof checkNumber);   //number
console.log(checkNumber);   //NaN(Not a number)

/*--------------------NULL TO NUMBER-----------------------*/

let nothing = null;
console.log(typeof nothing);  //  Object

let checkNull = Number(nothing);
console.log(typeof checkNull);   //   number
console.log(checkNull);   //  0


/*----------------UNDEFINED TO NUMBER--------------------*/


let unde = undefined;
console.log(typeof unde);    //undefined

let checkUnde = Number(unde);
console.log(typeof checkUnde);     //undefined
console.log(checkUnde);    //NaN


/*-----------------BOOLEAN TO NUMBER--------------------*/

let bool = true;
console.log(typeof bool);   //boolean

let checkBool = Number(bool);
console.log(typeof checkBool);   //Number
console.log(checkBool); // 1

/*-------------------STRING TO BOOLEAN-------------------*/

let isLoggedIn = "Aryan"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //true

//If isLoggedIn = "" an empty string or 0, then => FALSE



console.log(typeof NaN);   //Number
console.log(typeof undefined);  //Undefined
console.log(typeof null);  //Object
