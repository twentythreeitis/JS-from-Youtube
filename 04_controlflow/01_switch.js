/*----------------SWITCH ---------------------*/
//Basic syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("Mar");      //Output: March
        break;                   //break; is important because if no break then the 
                                 //compiler would run all cases below the matched case except default;
    case "apr":
        console.log("Apr");
        break;

    default:
        console.log("default case match");
        break;
}


