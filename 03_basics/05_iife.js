/*---------(IIFE) Immediately Invoked Function Expression-------------- */

(function chai(){
    console.log(`DB CONNECTED`);       //DB CONNECTED
})();

/*
Syntax (1)(2) => (1st) parenthesis is the container where we'll wrap the function,
(2nd) parenthesis will work for the invokation of the function.

IIFE can't only be termed as the function that can be ivoked immediately.
but, also to avoid global variable interference/pollution inside a fuction
*/

//In the form of ARROW FUNCTION

( () => {
    console.log(`DB Connected again`);    //DB Connected again
})();                                 //!MANDATORY TO ADD ";" IF WRITING TWO ORMORE IIFE

/*Now let's take a variable & parameter to print*/

((dbname) => {
    console.log(`Database ${dbname} is connected`);   //Database MySQL is connected
})("MySQL");

//NameD IIFE//
(function coffee(){
    console.log(`This is a named IIFE`);      //This is a named IIFE
})();


