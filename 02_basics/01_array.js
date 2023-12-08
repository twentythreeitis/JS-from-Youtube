const myArr = [0,1,2,3,4,5];
const myHeroes = ["Ironman", "Captain America"];

// console.log(myArr[1]);    //1

// //Array Methods

// myArr.push(6);
// // console.log(myArr);    //[0,1,2,3,4,5,6]  Adds the last array element.

// myArr.pop();
// console.log(myArr);   //[0,1,2,3,4,5]  Removes the last array element.

// myArr.unshift(8);
// console.log(myArr);    //[8,0,1,2,3,4,5]   Adds the element at the 0 index.

// myArr.shift();
// console.log(myArr);     //[0,1,2,3,4,5]    Removes the first elementof the array.

// console.log(myArr.includes(7));     //false
// console.log(myArr.indexOf(8));     //-1 Any element which is not present in an
                                    // array comes at -1 index.
// const newArray = myArr.join();
// console.log(newArray);          // 0,1,2,3,4,5  //Join binds two arrays and convert them into string with comma.
// console.log(typeof newArray);    //string

/*---------------  Slice & Splice   --------------------------- */

console.log("A", myArr);         //A[0,1,2,3,4,5]

/*++++++++SLICE+++++++++++++++++++++++++++++++++++ */
const myn1 = myArr.slice(1,3);    
console.log(myn1);               //priting new array [1,2]
console.log("B", myArr);         //B [0,1,2,3,4,5]


/*Slice me original array modify nahi hua.
(1,3) means index 1, 2 ke elements slice honge (not3)
therefore myn1 me slice ki value [1,2]. 
*/

/*+++++++++SPLICE++++++++++++++++++++++++++++++++++*/

const myn2 = myArr.splice(1,3);   
console.log("C", myArr);         //C [0,4,5]
console.log(myn2);               //printing new array [1,2,3]

/*Splice me original array hi modify hogya h aur (1,3)
 means index 1, 2, 3 teeno ko remove krdega original array se.

 myn2 jisme splice ka value extract hua tha myArr se vo store hogya
 [1,2,3].
*/

