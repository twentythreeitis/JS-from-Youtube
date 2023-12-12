// [for of]  Array specific loop

//Example 1 : Array
const arr = ["a","b","c","d","e"];

for (const i of arr) {
    // console.log(i);     //a b c d e
}

//Example 2: Strings

const greet = "Hello World!"

for (const i of greet) {
    //console.log(i);       //hello world!
}

//Example 3: Maps : unique values and in same order

const map = new Map();
map.set('IN', "India");
map.set('FR', "France");
map.set('UK', "United Kingdom");
map.set('US', "United States");
map.set('IN', "India");          //If we enter repetitive entry, not in output.

// console.log(map);

/*
    Map(4) {
    'IN' => 'India',
    'FR' => 'France',
    'UK' => 'United Kingdom',
    'US' => 'United States'
}
*/

for (const key of map) {
    // console.log(key);
}

//This will print the entire array and not seperately as key:value pair.

/*
[ 'IN', 'India' ]
[ 'FR', 'France' ]
[ 'UK', 'United Kingdom' ]
[ 'US', 'United States' ] 
*/
//To print value in key:value pair we have seperate syntax.

// for (const [key, value] of map) {
//     // console.log(key, value);
// }
/* 
IN India
FR France
UK United Kingdom
US United States
*/


//Example 4: Objects with forof loop [ERROR]

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObj) {
//     // console.log(key,value);          //Error, myObj is not iterable.
// }

//*FOROF LOOP can't loop an object *//







/*-------------OBJECT ITERATION BEST DONE BY FORIN LOOP --------------*/
/*--------------------------------------------------------------------*/
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);                         //js cpp rb swift
    //If we want values
    // console.log(myObject[key]);               //javascript c++ ruby 
}

/*-------FOR IN LOOP IN ARRAYS-------*/

const randomArr = [23,45,67,89,10];

for (const key in randomArr) {
    // console.log(key);                     // 0 1 2 3 4 index print hogya
    // console.log(randomArr[key]);          // 23 45 67 89 10
}

/*-------FOR IN LOOP ON MAP-----------*/

const newMap = new Map();
newMap.set('Gmail', 'Google');
newMap.set('Windows', 'Microsoft');
newMap.set('Ubuntu', 'Linux');
newMap.set('iPad', 'Apple');


// for (const [key,value] in newMap) {
//     console.log(newMap(key,value));         //No Output Neither Error
// }

//*FOR IN LOOP works for both the arrays and the objects*//
