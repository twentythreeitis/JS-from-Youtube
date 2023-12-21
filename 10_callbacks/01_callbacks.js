/*
A callback is a function passed as an argument to another function.
This technique allows a function to call another function.
A callback function can run after another function has finished
*/

/*
We will understand callbacks by taking a scenario example
where a user is required to register to a website step by step

1. Register
2. Send welcome email
3. Login
4. Get User Date
5. Display user data
*/

// function register(){
//   setTimeout(()=>{
//     console.log("Registeration Successful");
//   },2000)
// }
// function sendEmail(){
//   setTimeout(()=>{
//     console.log("Email Verification");
//   },2000)
// }
// function login(){
//   setTimeout(()=>{
//     console.log("Login Successful");
//   },2000)
// }
// function getUserData(){
//   setTimeout(()=>{
//     console.log("User data retrieved");
//   },2000)
// }
// function displayUserData(){
//   setTimeout(()=>{
//     console.log("This is user data!");
//   },2000)
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other components are working!!");
//When we run this, all logs will be executed without checking whether the previous step was successful or not!.

/*
Usually, while dealing with Web APIs, or Network Request, or Database connection, those things takes time to execute or return back the information which was requested.
In that case, asynchronous JS is applied.
*/

//After using setTimeout() each operation will be delayed for 2 seconds 
//except the log("Other components are working!!")

/*
OUTPUT
  Other components are successful!   ye pehle run hogya, rest will execute after 2 secs
  Registeration Successful
  Email Verification 
  Login Successful   
  User data retrieved
  This is user data!
*/

//This is the application of Async JS. But, we have given fixed timing to each operation
//which is not always the case because sometimes network request (for registration)
//may take more than 2 seconds and email verification may take 4 seconds.

/* 
When we change setTimeout() time component of functions, their execution are done after that
that specific time and not in the exact procedure or order, even though we invoked the functions in order.
*/

/*---------PROBLEMS REMAINS STILL-----------
  We want that until and unless user register himself and completes these
  processes in order till then the any of the forward processes should not get executed.
*/

/*------HOW TO MOVE WITH PROPER ORDER?-CALLBACK IS THE RESCUE--------*/
//We will create callback functions to get rid of improper order exceution

function register(callback){
  setTimeout(()=>{
    console.log("Registeration Successful");    //here, register() acts as a higher order function which can take up another function as a parameter or return another function.
    callback();
  },1000)
}
function sendEmail(callback1){
  setTimeout(()=>{
    console.log("Email Verification");
    callback1();
  },3000)
}
function login(callback2){
  setTimeout(()=>{
    console.log("Login Successful");
    callback2();
  },2000)
}
function getUserData(callback3){
  setTimeout(()=>{
    console.log("User data retrieved");
    callback3();
  },2000)
}
function displayUserData(){
  setTimeout(()=>{
    console.log("This is user data!");
  },2000)
}
//But, after adding callback functions as a paramter we also need to pass the 
//below function as a argument while invoking that function.

// register(function(){
//   sendEmail(function(){
//     login(function(){
//       getUserData(function(){
//         displayUserData();
//       });
//     });
//   });
// });
/*
This above nesting is allowing the primary to cotnrol the flow of secondary functions
Only, when register() will get complete executing--> sendEmail() will be invoked.
Only, when sendEmail() will get complete executing--> login() will be invoked.
Only, when login() will get complete executing--> getUserData() will be invoked.
Only, when getUserData() will get complete executing--> displayUserData() will be invoked.
*/

console.log("Other components are working!!");  //this will be executed first anyway.

/*
FINAL OUTPUT
  Other components are working!!
  Registeration Successful
  Email Verification
  Login Successful
  User data retrieved
  This is user data!

Hence, the order is resolved and each function is completing its task 
and allowing the next function to execute.
*/

/*-------------------PROBLEMS WITH CALLBACKS--------------------*/
/* 
This orientation of callback functions nested one inside of the other results in 
increment in code complexity, which brings in the risk of CALL BACK HELL!!!

*/
register(function(){
  sendEmail(function(){
    login(function(){
      getUserData(function(){
        displayUserData();
      });
    });
  });
});

/*
Callback Hell is essentially nested callbacks stacked below one another
forming a pyramid structure. Every callback depends/waits for the 
previous callback, thereby making a pyramid structure that affects
the readability and maintainability of the code. 
*/

/*-----------------SOLUTION TO CALLBACK HELL---------------------*/
/*
The solution to callback hell is PROMISES.
Next doc for promises!!!:)
*/