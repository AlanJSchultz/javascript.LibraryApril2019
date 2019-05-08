/*
Make 2 functions.  
Each function accepts an array of strings and returns that array of strings after we operate on that array.

The first function removes any elements from the input array that have 'q' or 'p' in them (uppcase or lowercase).

The second function capitalizes the first letter of each word in the string and leaves the rest of the string untouched.

Here is a test with its output:

input-
let inputArr = ['tyler Michael shelton', 'LAINEY', '1150 academy', 'quietly tiptoe', 'this is a thing'];
console.log(qOrPRemover(capitalFirst(inputArr)));

output-
[ 'Tyler Michael Shelton',
  'LAINEY',
  '1150 Academy',
  'This Is A Thing' ]
*/


let inputArr = ['tyler Michael shelton', 'LAINEY', '1150 academy', 'quietly tibptoe', 'this is a thing'];
//console.log(qOrPRemover(capitalFirst(inputArr)));
console.log(inputArr);



function qpRemover(array){
    //insert your code here
  }
  
  function capitalizer(array){
    //insert your code here
  }
  




  var text = "foo bar lOo zOo moo";
  console.log(text);  //  foo bar lOo zOo moo
// fixText = text.toLowerCase()
// .split(' ')
  fixText = text.split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    console.log(fixText);  //  Foo Bar LOo ZOo Moo

