/*---------THEORY ----------------------*/
/*
JavaScript is a synchronous, single threaded programming language.
Sychronous means code execution happens with one line at a time and one after other.
Single-threaded means all execution happens on the same thread.


Execution Context
(i) executes one line of code at a time
(ii)Until the previous statement execution is not completed, the next statement
can't be executed before its completion. Each operation waits for the last one 
to complete before executing.

Call Stack & Memory Heap

*/

/*
Blocking Code V/S Non-blocking Code

Blocking code blocks the flow of the program. Usually, this is necessary when we 
perform CRUD operations in the database. Jb tk register database se approve nhi 
hoga tb tk registeration successful message nhi krskte.

Non-blocking code does not break the flow of the program. It performs other tasks
and hold the blocked task to execute it after some time.

*/

/*
JS Engine(V8) is built of Memory Heap and Call Stack which is limited because single threaded.

But, when we see runtime environment of JavaScript like Node.js/Web Browser/Deno etc.
They are not just standalone JS Engine.

There is a thing called Web API like Node environment. 
DOM API comes with any web browser and not with Node.

*/

/*
--------------------What makes JS behaves Asynchronous?------------------------?

Writing Async code you want a resource or mechanism that can hold a task and remind you later.
Those type of tasks can be done by Web API, DOM API, SetTimeout, SetInterval, fetch API etc.

Step 1. When any of the above methods or APIs are called in any function in the call-stack. 
Step 2. It request call to the respective API and sets a time to execute it after a specific time (setTimeout) or event.
Step 3. There is a call-back register where all these calls are kepts and then after completion
of usual tasks they are send to the call-stack via Task Queue. 


There are two things in JS module i.e 
(i) Task Queue
(ii) Fetch-Promise

(i)Task Queue:- Task Queue is the reason what makes JS asynchronous in special situation.
It is a queue that stores async section of any code sent as a request to the API 
in a queue where FIRST IN FIRST OUT follows. 

(ii)Fetch-Promise:- Higher priority queue similar to Task Queue in the FetchAPI.
Promise Queue acts as a saviour concept which can tell if the posponed task is completed or not
If completed, then do this and if not then do this.


*/


/*TRICKY QUESTION*/
/*Suppose there are three statements and decide the order of their execution*/

// console.log('2');
// console.log(setTimeout(0seconds) 'Async');   
//  this is wrong syntax which is just saying to print Async after 0 seconds
// console.log('3');

/*
What will be the order of their execution?
2
3
'Async

Because, even if Async is setTimeout at 0 seconds still 
it has to go through the call-back register and task queue till then 3 gets printed.
*/