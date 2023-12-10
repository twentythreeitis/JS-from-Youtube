const user = {
    usernname: "Aryan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.usernname}, welcome to the website`);
        console.log(this);     //ye "this" will print the entire object "user"
    }
}

// user.welcomeMessage();    //Aryan, welcome to the website.

// //Now, if the user changes the username from aryan to something else.

// user.usernname = "Hrithik";

// user.welcomeMessage();      //Hrithik, welcome to the website.

// console.log(this);             //{} empty object in Node.js runtime
//If on browser, output is "Window" object

// function chai(){
//     let username = "aryan";
//     console.log(this.username);
// }
// chai();       //undefined  Because "this" is an object driven property and won't perform in a way inside a function.


/*-------------------------ARROW FUNCTIONS--------------------*/

/*Removing the "function" keyword and add "=>" to convert any function into an arrow function.*/


//Basic arrow function () => {}
//Storing it in a variable.

//Explicit syntax to write an arrow function {}
const addNo = (num1, num2) => {     
    //Whenever we use "{}", then we have to use return keyword.
    return num1 + num2
}
// console.log(addNo(3,5));    //8

//Implicit syntax to write arrow function is by removing the {}.
// writing both the sentences in one line.

const addTwo = (num1, num2) => (num1 + num2)     
//there is no need to write return keyword because no {}.
// console.log(addTwo(3,5));

/* ------How To Print An Object Using Arrow Functions -------*/

const ArrowObj = () => ({username: "aryan", id: 45});

console.log(ArrowObj);                // [Function: ArrowObj]
console.log(ArrowObj().username);     //aryan
console.log(ArrowObj().id);            //45

/*--------Arrow Functions in loops --------------------------*/

// const myArray = [2,5,3,7,8]

myArray.forEach(() => {});   //myArray.forEach(function() {});
