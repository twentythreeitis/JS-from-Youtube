/*---------------CORRECTION OF CALLBACK WITH PROMISES---------- */


/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
The constructor syntax for a promise object is:


*/                         //This function below is the executer that runs automatically.
let promise = new Promise(function(resolve, reject) {
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


function register(callback){
    setTimeout(()=>{
      console.log("Registeration Successful");
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

  console.log("Other components are working!!");

  register(function(){
    sendEmail(function(){
      login(function(){
        getUserData(function(){
          displayUserData();
        });
      });
    });
  });

  