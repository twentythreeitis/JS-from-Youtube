// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(4,8);    //12
// addTwoNumbers(3,"7");   //37 
// addTwoNumbers(2,"a");    //2a
// addTwoNumbers(5, null);   //5
// addTwoNumbers(4, undefined);    //NaN
// addTwoNumbers(7, NaN);       //NaN

//"number1" & "number2" are parameters
//"3" & "8" are arguments

//We can store value of a function inside a variable//
// const result = addTwoNumbers(4,6);
// console.log("Result",result);     //10 & undefined 

//Undefined is the value returned by the function...console.log is just a
//statement inside the function and there is no return value hence "undefined" after 10.

//We'll write the function differently.

//1ST WAY//
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    console.log("This line will never be executed");  //return reach krte hi function exit krjata
}
// const result = addTwoNumbers(9,8);
// console.log("Result",result);        //Result 17

// console.log(addTwoNumbers(2,5));      //7

// addTwoNumbers(2,5);    //If we just execute the function, 7 will get stored in result but not print


//2ND WAY//
function addTwoNumbers(number1, number2){
    return number1 + number2;
}

// console.log(addTwoNumbers(2,7));//9

/*----------Multiple method to accept arguments------------*/

function loginUserMessage(username = "Hari"){   //"Hari" is the default value to avoid undefined input if user doesn't enter any value.
    return `${username} just logged in`;
}

console.log(loginUserMessage("Aryan"));    //Aryan just logged in

console.log(loginUserMessage());    //Sam just logged in 