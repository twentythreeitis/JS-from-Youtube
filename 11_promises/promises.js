/*---------------CORRECTION OF CALLBACK WITH PROMISES---------- */


/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
The constructor syntax for a promise object is:


*/                         //This function below is the executer that runs automatically.
let promiseVar = new Promise(function(resolve, reject) {
  // executor (the producing code which will take time)
});

/*
Its arguments "resolve" and "reject" are callbacks provided by JavaScript itself. 
Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, 
it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
*/

//Example of a successful job completion, a fulfilled promise//

let promiseSuccess = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

/*
After 1 second of "processing", the executer calls resolve("done") to produce
the result. This changes the state of the promise object to "fulfilled".
*/

//Example of a failed job completion, a rejected promise//

let promiseFail = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

/*
The call to reject(...) moves the promise object to "rejected" state
*/

/*----------------------THEORY OVER FOR PROMISES-----------------------*/
/*-------CORRECTING PREVIOUS CALLBACK HELL TO UNDERSTAND PROMISES------*/

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Registeration Successful");
            resolve();
        },1000)
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email Verification");
            resolve();
        },3000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login Successful");
            resolve();
        },2000)
    })
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User data retrieved");
            resolve();
        },1000)
    })
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is user data!");
            resolve();
        },1000)
    })
}

  register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData);    //chaining

  console.log("Other components are working!!");


//Now, suppose there's an error in register() function, how will we handle the error?//
/*---------------HANDLING ERRORS WITH PROMISES---------------------*/

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return reject("Error agya bhai!!");      //reject in place of "resolve()"
            console.log("Registeration Successful");
        },1000)
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email Verification");
            resolve();
        },3000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login Successful");
            resolve();
        },2000)
    })
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User data retrieved");
            resolve();
        },1000)
    })
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is user data!");
            resolve();
        },1000)
    })
}

  register()
  .then(sendEmail)    //.then() recieves the resolve part of the callback.
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err)=>{         //.catch() receives the error part of the callback.
    console.log(`An error in the block is received by .catch() like here 
    the error is ${err}`);
  });

  console.log("Other components are working!!");
/*
OUTPUT
    Other components are working!!
    An error in the block is received by .catch() like here 
    the error is Error agya bhai!!
*/

/*finally

The finally() method is always executed whether the promise is fulfilled 
or rejected. In other words, the finally() method is executed when the 
promise is settled.
*/
/*
  Now, you hav learnt how useful promises can be to incorporate asynchronous JS.
  There is a new method to make the promises handling much easier:
  ASYNC/AWAIT which will see in the next doc.
*/

