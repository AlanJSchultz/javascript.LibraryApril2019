/*
repl.it - 02.02-Object keys and Object value

Use the function 'objectChecker' to accept the object {name: 'Batman', age: 42, isVillain: false}.  Your function should return an array that has three elements inside: 
a)  an array of all the keys in the object,
b)  an array of all the values in the object, 
c)  the number of key-value pairs in the object.  Make sure the array has items a, b, and c in order.
Be sure to console.log what your function returns so you can see it!
*/
//
// function objectChecker(object){
//     //write your code here
//   }
//

var gothamHero = {
    name: 'Batman', 
    age: 42, 
    isVillain: false
};

function objectChecker(x){
    let arr = []
    arr.push(Object.keys(x))
    arr.push(Object.values(x))
    arr.push(arr[0].length)
    return arr 
}

console.log (objectChecker(gothamHero));

