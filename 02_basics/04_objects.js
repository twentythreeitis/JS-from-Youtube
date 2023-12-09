//Declaring objects by the help of costructor

// const tinder = new Object();    //singleton object because constructor
const tinderUser = {};     //declaration by literals

//Adding some basic data types in key:value properties
tinderUser.id = "123nike"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinder);       //{}
// console.log(tinderUser);   //{}

//Adding objects inside an object.
const regUser = {
    email: "regular@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "Aryan",
            lastname: "Vashisth"
        }
    }
}

// console.log(regUser.fullname.userfullname.fisrtname);   //Aryan

//Merging objects with one another

const obj1 = {1: 'a',2: 'b'};
const obj2 = {3: 'a',4: "b"};

// const obj3 = {obj1,obj2};
////{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//Similar array type merging problem


// const obj3 = Object.assign(obj1,obj2);  
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 

// const obj3 = Object.assign({}, obj1, obj2);  
//Similar to above but {} acts as a target empty object and obj1 and obj2 are source array.
//We don't use assign but spread operator.

/*----------SPREAD OPERATOR TO MERGE OBJECT---------------------*/

const obj3 = {...obj1,...obj2};
console.log(obj3);     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


/*--------ARRAY OF OBJECTS-----------*/

const users = [
    {
        id: 1,
        email: "thereverb.com"
    },
    {
        id: 2,
        email: "bajao.com"
    },
    {
        id: 3,
        email: "guitar.com"    
    }
]

console.log(users[1].email);    //bajao.com

//--------Extracting object keys from any object --------//

console.log(Object.keys(tinderUser));   //['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));  //[ '123nike', 'Sammy', false ]

//Object.keys() & Object.values() extract the keys and values from any object 
//and store them in an array.

console.log(Object.entries(tinderUser));
//[ [ 'id', '123nike' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
//Coverts each key:value pair into an array.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //true 
//.hasOwnProperty() checks whether that object have that properrty or not.






