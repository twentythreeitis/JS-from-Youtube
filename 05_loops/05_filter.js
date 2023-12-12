const myNums = [1,2,3,4,5,6,7,8,9,10]

/*
const newNums = myNums.filter( (num) => num > 4);
console.log(newNums);                //[5,6,7,8,9,10]
*/
/**
 filter() takes in a callback function which will access each index 
 and gives output with respect to the condition. 
 (num) => num > 4
 index => condition
 */


 /*----FILTER WITH ARROW FUNCTION---------*/

//  const newNums = myNums.filter( (num) => {
//     // num > 4  (no output because "return" is required if {} scoped)
//     return num > 4;
//  })
// console.log(newNums);              //[ 5, 6, 7, 8, 9, 10 ]


/*------USINNG FOR EACH TO PRINT CONDIIONS ---------*/

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);                 //[5 ,6 ,7, 8, 9, 10]



/*--------------------------------------------------------------*/
/*FILTERING ARRAY OF OBJECTS USUALLY RETREIVED FROM THE DATABASE*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let filteredBooks = books.filter( (book) => (book.genre == 'Fiction'));

// console.log(filteredBooks); 
/*
  [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
  ]
*/

//Let's perform another operation

filteredBooks = books.filter( (book) => { return book.edition <= 2000 && book.genre == 'History'});    
//If we use scope{} then we must add "return"
console.log(filteredBooks);

/* Remember output is an array with nested objects
[
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/