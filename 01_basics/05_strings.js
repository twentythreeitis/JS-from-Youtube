const name = "Aryan";
const repoCount = 50

//console.log(name + repoCount + " repositeries");
//This is not the preferred way to write concatenated strings. Old method

/*New method is done using back ticks : - String Interpolation*/

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is Aryan and my repo count is 50.

//How to declare a string?
//We can do it by using new keyword just like an object declaration.

const gameName = new String('Aryannnn');

console.log(gameName[0]);  //A

/*--------------METHODS IN STRINGS --------------*/

console.log(gameName.length);  //8
console.log(gameName.toUpperCase());  //ARYANNNN
console.log(gameName.charAt(2));   //y

const newString = gameName.substring(0,4);
console.log(newString);    //Arya (inclusive char at 0 and exclusive char at 4)


const anotherString = gameName.slice(2,6);   //(-ve index counts from right to left)
console.log(anotherString);    //yann

const newStringOne = '  aryan  ';
console.log(newStringOne);
console.log(newStringOne.trim());   //removes all the unwanted space and new line \n//

const url = "https://aryan.com/port%20folio";

console.log(url.replace('%20', '-'));   // replaces %20 with -
console.log(url.includes('aryan'));   //true


/*---Converting a string into array by some definite alphabet----*/

console.log(gameName.split("a"));   // ['Ary' , 'nnnn']
console.log(gameName.split("n"));   // [ 'Arya', '', '', '', '' ]