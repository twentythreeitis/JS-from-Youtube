const lang = ["js", "ruby", "python", "java"];

// lang.forEach(function (item) {     
//     // console.log(item);                      //js ruby python java
// })

//forEach() is a callback function hence the function does not require 
//any name like any usual function.

//Using arrow function

// lang.forEach((item)=>{
//     console.log(item);          //js ruby python java
// })

function printMe(item){
    console.log(item);
}

// lang.forEach(printMe);             //js ruby python java
// lang.forEach(printMe());           //error execute nahi krna () 

//forEach() doesn't only have item as a parameter but,
//(item, index, array)

lang.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

/*
js 0 [ 'js', 'ruby', 'python', 'java' ]
ruby 1 [ 'js', 'ruby', 'python', 'java' ]
python 2 [ 'js', 'ruby', 'python', 'java' ]
java 3 [ 'js', 'ruby', 'python', 'java' ]
*/

/*------------OBJECT LIST INSIDE AN ARRAY----------------*/
/*---------------USING FOR IN LOOP-----------------------*/

const languages = [
    {
        langName: 'JavaScript',
        langExtension: '.js'
    },
    {
        langName: 'Python',
        langExtension: '.py'
    },
    {
        langName: 'Java',
        langExtension: '.java'
    }
]

languages.forEach((key)=>{
    console.log(`${key.langName} has an extension of ${key.langExtension}`);
})

/*
    JavaScript has a value of .js
    Python has a value of .py
    Java has a value of .java
*/