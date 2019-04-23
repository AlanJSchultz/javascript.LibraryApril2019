/*
repl.it - 02.03-Inner & Outter Function

Write a first function which takes a function as a parameter and the first function runs a loop inside. 
This loop should run 10 times and call the second function.

Every time the second function is called, it should add 5 more to a variable (initialized to 3) passed to it from the first function. 
Once the loop is finished, return the increased variable within the first function.

Here's a hint to get you started:

Inside first function:
  make a variable
  start the loop
    call the second function which adds to the variable
    call the second function again
    ...
  end the loop
  return the variable

Outside first function:
  grab the result of the first function call
  console.log the grabbed result
*/

function firstFunc(params) {
  var x = 3
  for (let i = 0; i < 10; i++) {
    secondFunc
    
  }
}

function secondFunc(params) {
  x = x + 5;
  return x;
}
