let str1 = "hello"
let str2 = " aryan"

let str3 = str1 + str2
console.log(str3);  //hello aryan

console.log("1" + 2);     //12
console.log(1+ "2");      //12
console.log("1" + 2 +2);       //122 because string first then whole string
console.log(1 + 2 + "2");      //32 string will get concatinated at the last after addition.


console.log(true);   //true
console.log(+true);   //1
console.log(+"");    //0
 
/*--------COMPARISON---------*/

console.log("2" > 1);    //true
console.log("02" > 1);   //true

console.log(null > 0);    //false  here null is converted to 0=> 0>0 false
console.log(null ==0);    //false  here no covnersion because ==
console.log(null >= 0);    //true  here null=> 0, therefore 0 >= 0 true

/*The reason is that a equality check == ad comparison >,<,>=,<=
work differently.
Comparisons convert null to a number, treating it as 0.
Therefore, null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(null == undefined);   //true   
console.log(null >= undefined);   //false
console.log(null <= undefined);   //false
console.log(NaN == undefined);   //false

