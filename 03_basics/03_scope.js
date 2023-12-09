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
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log(a);   //10 local variable let a = 10 works here
}

console.log(a);   //300 global variable preceeds outisde the scope
