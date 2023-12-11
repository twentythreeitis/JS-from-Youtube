//for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);        //1,2,3,4,5,6,7,8,9
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j)
        
    }
}

//--------FOR LOOP in Array -----------//

let myArr = ["flash", "batman", "superman"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);              //flash, batman, superman
}


//break and continue;

//break

for (let i = 0; i < 20; i++) {             
    if(i == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${i}`);
    /*
    Value of i is 0
    Value of i is 1
    Value of i is 2
    Value of i is 3
    Value of i is 4
    Detected 5
    */
}

//continue

for (let i = 0; i <= 10; i++) {
    if(i==5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`Value of i is ${i}`);
    
}

/* 
Value of i is 0
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5         5 is skipped
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10
*/