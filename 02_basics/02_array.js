const marvel_heroes = ['Thor', 'Ironman', 'Spiderman'];
const dc_heroes = ['Superman', 'Flash', 'Batman'];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);   //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// Arrays are capable to accept any data type be it an array or object.
//Push() pushed the entire array as a 3rd indexed element. 2-D array

// console.log(marvel_heroes[3][1]);    //Flash 
//not a good practice tho


// const allHeros = marvel_heroes.concat(dc_heroes);
// console.log(allHeros);     //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//Proper merging of array is done by concat by creating a new array.
//Usually people don't use concat instead use spread... operator.

/* -----------SPREAD... ---------------------*/
// const all_my_heros = [...marvel_heroes, ...dc_heroes];
// console.log(all_my_heros);
//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//We can merge multiple arrays just by adding ...


const anoArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const usableArr = anoArr.flat(Infinity);
// console.log(usableArr);  
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

/* ------------Array.is/Array.from/Array.of ------------*/

//Checking whether an array and then converting
console.log(Array.isArray("Aryan"));    //false
console.log(Array.from("Aryan"));    //['A','r','y','a','n']
console.log(Array.from({name: "Aryan"}));    //[] returns an empty array because can't convert


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));   //[100,200,300]




