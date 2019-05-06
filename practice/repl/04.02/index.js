/*
Design a function that takes three inputs, which are the 3 side lengths of a triangle.
Use the (Converse of the) Pythagorean Theorem to see if the triangle is a right triangle.
Return true if it is, and false if it isn't.
The largest side length needs to be the third input to the function.
*/

function pythConverse(a, b, c){
    //insert your code here
    if ((a **= 2) + (b **= 2) == (c **= 2)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(pythConverse(3, 4, 5));  //  true
  console.log(pythConverse(4, 5, 6));  //  false
  