/*
Challenge 1 (Arrays, Array Methods):
Make an array that stores numbers. 
Using Array.prototype.forEach(), add a random number amount to the value of every element in the array.
Console.log your array to confirm that it worked.
*/

//[your array goes here].forEach((value) => {do something here})

//the stuff inside the .forEach parentheses is a callback function be sure to make your array first. 
//also,  play with forEach if you haven't already!  :)

let arr = [1, 2, 3, 4, 5];

let newArr = []

//arr.forEach((value) => {newArr.push(value + Math.random())});
//or using a function for the same
arr.forEach(function(value) {newArr.push(value + Math.random())});

console.log(newArr);


/*
Challenge 2:
Use the object I slack out to you.
Make a function which takes an object, and returns an array of every-other key.
Use your function on the object I slack out to test it
*/

let obj = {
    keyA: '1150',
    keyB: 1150,
    keyC: undefined,
    keyD: null,
    keyE: [1, 2, 3]
}

// function func1(x){
//     let arr = []
//     arr.push(Object.keys(x))
//     arr.push(arr[0].length)
//     return arr
// }
// console.log (func1(obj));

const objPlay = (object) => {
    let keys = Object.keys(object); //keys is an array of the keys from object
    let returnArr = []; //this is an empty return array
    for (let i = 0; i < keys.length; i++){ //this for loop goes through every
      //value in the keys array
      if (i % 2 == 0){
        returnArr.push(keys[i]) //this add the even elements to the return array
      }
    }
    return returnArr;
  }

  console.log(objPlay(obj));
  