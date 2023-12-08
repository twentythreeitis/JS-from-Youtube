/* Objects can be declared in two ways: 
(1) Literals (2)Constructor-Singleton 
*/

//Object literals

const JsUser = {
    name: "Aryan",
    "full_Name": "Aryan Vashisth",  //we cant access this prop with . notation
    email: "aryan@gmail.com",
    age: 23,
    isLoggedIn: false,
    lastLoginDays: ["Monnday","Tuesday"]
}

//How to access an object?

// console.log(JsUser.email);   //aryan@gmail.com
// console.log(JsUser["email"]);    //aryan@gmail.com
// console.log(JsUser["full_Name"]);    //"Aryan Vashisth"

//How to declare a Sybmol and add them in an object as a key//

const mySym = Symbol("key1");

//Add this symbol as a key in object

const newObj = {
    name: "Aryan",
    [mySym]: "This is a symbol key",    //a symbol should always be within []
    dob: "15/10/2000"
}

// console.log(newObj[mySym]);    //This is a symbol key.

// console.log(newObj.mySym);    //This is a symbol key.

/*The difference was only the type of output.
[mySum] will work and add the key as a symbol
whereas .mySum will add the key as a string.
*/

// console.log(typeof(newObj.mySym));    //we cant access a symbol with .
// console.log(typeof(newObj[mySym]));   //we can access a symbol with [].

//How to change the value of objects

JsUser.email = "www.google.com";
// console.log(JsUser);    //email will be changed

//freeze property avoid any modification

// Object.freeze(JsUser);
// JsUser.email = "chatgptai@com";
// console.log(JsUser);   //no change in the email

/*Adding functions inside an Object*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);   //Function {anonymous}
// console.log(JsUser.greeting());   //Hello JS user

console.log(JsUser.greetingTwo());   //Hello JS user, Aryan


/* -----------FINAL NOTE --------------

We should generally use . notation in general cases and use []
only when necessary.

*/