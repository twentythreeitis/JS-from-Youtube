/*------------WHEN WE HAVE TO ADD NUMEROUS PARAMETERS--------------*/

//In any e-commerce project, a user can add multiple items in the cart.
//Inndirectly, forcing more than 2,3 nos of parameters.

function calcCartPrice(num1){
    return num1;
}

// console.log(calcCartPrice(4));   //4

//What happens when we give multiple arguments

// console.log(calcCartPrice(100, 400, 500));    //100 only 

// Here comes rest operator ... which is also called as a spread optr.
// Rest operator adds multiple arguments in a single bundle of an array and returns it.

function calcCartPrice(...num1){
    return num1;
}
// console.log(calcCartPrice(100, 400, 500));    //[100, 400, 500]

//another case 
function calcCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calcCartPrice(100, 400, 500, 250, 670));   //[500, 250, 670]


/*---------------------------------------------------------------*/
/*-------HOW AN OBJECT IS PASSED AND USED IN A FUNCTION -------- */

const user = {
    username: "aryan",
    price: 199
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user);   //Username is aryan and price is 199

//We can also pass a direct obect as a argument.

handleObj({
    username: "Sam Altman",
    price: 249
})                    //Username is Sam Altman and price is 249


/*----------------------------------------------------------------*/
/*------HOW AN ARRAY IS PASSED AND ACCESSED IN A FUNCTION --------*/

const myArr = [200, 400, 600]

function return2ndValue(getArr){
    return getArr[1];
}

console.log(return2ndValue(myArr));           //400 





 
