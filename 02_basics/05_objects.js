/*------------OBJECTS DE-STRUCTURE & JSON API --------------------*/

//Objects destructuring 

const course = {
    coursename: "JS ZTM",
    price: "999",
    courseInstructor: "HiteshChoudhary"
}

// console.log(course.coursename);

//We can access any property by another syntax.
//Destructuring of Objects
const {courseInstructor: instructor} = course   //courseInstructor seems to large we can also call it by other name.

// console.log(courseInstructor);       //HiteshChaoudhary
console.log(instructor);             //HiteshChoudhary  

/*--------------------------APIS-----------------------------*/


//Format of API is similar to an objectsbut without a name which is called JSON
//JavaScript Object Notation(json)

{
    "name": "Aryan",
    "course": "JS",
    "price": "free"
}
