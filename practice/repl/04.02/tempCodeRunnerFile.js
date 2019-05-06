
function pythConverse(a, b, c){
    //insert your code here
    if ((a **= 2) + (b **= 2) == (c **=2)) {
      return 'yes!'
    } else {
      return 'no!'
    }
  }

  console.log(pythConverse(3, 4, 5));  //  yes!
  console.log(pythConverse(4, 5, 6));  //  no!
  