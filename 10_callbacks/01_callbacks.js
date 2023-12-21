/*
A callback is a function passed as an argument to another function.
This technique allows a function to call another function.
A callback function can run after another function has finished
*/

/*
We will understand callbacks by taking a scenario example
where a user is required to register 
*/

function fetchData(callback) {
    setTimeout(function () {
      const data = 'Hello, world!';
      callback(data);
    }, 1000);
  }
  
  function handleData(data) {
    console.log(data);
  }
  
  fetchData(handleData);
  