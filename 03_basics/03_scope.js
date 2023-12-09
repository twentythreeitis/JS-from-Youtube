// let a = 10;
// const b = 20
// var c = 30;

// console.log(a);     //10
// console.log(b);     //20
// console.log(c);     //30

//Everything works well until here, problem comes when curly braces comes
//{} this is called a scope. Not the  object one but the if-else, for, functions etc.

// if(true){
//     let a = 10;
//     const b = 20
//     var c = 30;
// }
// console.log(a);   //Throws Reference error: a is not defined
// console.log(b);   //Throws similar reference error: b is not defined
// console.log(c);      //30

/*  variables declared with "var" can be accessed inside and outside of a block scope.
variables declared with "let" and "const" inside the {block scope} can't be accessed outside the {}.

Global variables can be accessed inside the block scope.
Block level variables can't be accessed outside the scope.

"var" is usually avoided by professional programmers because of lack of code reliabilty.
*/


// var c = 300;
// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     console.log(a);   //10 local variable let a = 10 works here
// }

// console.log(a);   //300 global variable preceeds outisde the scope

/*--------------NESTED SCOPE----------------*/

//  function one(){
//     const username = "aryan";

//     function two(){
//         const website = "youtube"   //only available inside {}
//         console.log(username);
//     }
//     // console.log(website);   //error website is not declared 

//     two();
//  }
//  one();

//Only output will be "aryan" because username is global wrt to website.

/*Nested functions, child function can access parent's function but not vice versa.*/

//Similar rules works for if-else functions as well

// if(true){
//     const username = "aryan"
//     if(username === "aryan"){
//         const website = " youtube"
//         console.log(username + website);   //will execute
//     }
//     // console.log(website);    //error website is not defined
// }
// console.log(username);   //error website is not defined

// Ultimate Output aryan youtube

/*------------HOISTING HIGHLIGHTS IN JS--------------------*/

// function addOne(num){   //this way of function is known as function declaration
//     return num + 1;
// }
// console.log(addOne(5));  //6

//We'll now create a function expression similar to above
const addTwo = function(num){    //this way of function is known as function expression because the return value is stored in a variable.
    return num+2; 
}

console.log(addTwo(5));   //7

//Now, let's understand if we invoke both the fuction before declaration

//--------------------------ADDONE---------------------------//
console.log(addOne(5));     //6 Works fine no error

function addOne(num){
    return num + 1;
}
//----------------------------ADDTWO-------------------------//

console.log(addTwo(5));     //Error addTwo has already been declared

const addTwo = function(num){    
    return num+2; 
}

//This is the play of hoisting.