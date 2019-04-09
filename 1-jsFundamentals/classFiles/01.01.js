/*
Make 3 variables.  Your first variable should be a string.  Your second variable should be an array, which
has a string inside.  Your final variable should be an object, which has a property which is a string.

Write 3 console.log messages which show the string from each type of variable.
*/

let str = 'eleven fifty';
let arr = ['1150', 1150];
//index #:    0       1
let obj = {string: '1150 academy'};

console.log(str);
console.log(arr[0], arr[1]);
console.log(obj.string);


/*
Make 7 variables: one is a string, one a number, one a boolean, one is undefined, one null, one
an array, and one an object.  Write a console.log message showing the type of each variable.
What surprises you about this?
*/

let varStr = 'Eleven Fifty Academy';
let varNum = 1150;
let varBool = true;
let varUndef = undefined;
let var5 = null;
let var6 = ['Eleven', 'Fifty', 'Academy'];
let var7 = hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log ()



/*
Challenge 3:
Make 2 variables.  The first is an array, the second is an object.  Inside each variable, store a string,
a number, a boolean, an undefined, a null, an array, and an object.
Once you've defined each variable, use console.log messages to output every value within your array and
your object.
*/

let varArray = ['Eleven Fifty', 1150, true, undefined, null, [1,2,3], {key:'Zach', Key2: 'Brie'}];
let varObject= {str: 'holly', num: 1150, bool: true, }

console.log()
console.log()



// Challenge 1
// Make 3 variables.  Your first variable should be a string.  Your second variable should be an array, which
// has a string inside.  Your final variable should be an object, which has a property which is a string.
// Write 3 console.log messages which show the string from each type of variable.

let myString = 'this is a string';
let myArray = ['stringInside', 1150];
let myObject = {prop: 'stringy'};

console.log(myString);
console.log(myArray)
console.log(myArray[1]) //using bracket notation, we can grab the value at a specific index of our array
console.log(myObject);
console.log(myObject.prop); //using dot notation, we can grab the value of our prop keyword


// Challenge 2:
// Make 7 variables: one is a string, one a number, one a boolean, one is undefined, one null, one
// an array, and one an object.  Write a console.log message showing the type of each variable.  What
// surprises you about this?

let str = 'another string';
let num = 4;
let bool = true;
let und = undefined;
let nul = null;
let arr = [1, 2, 3 ,4 ,5];
let obj = {city: 'Chicago', team: 'Bears'};

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nul);
console.log(typeof arr);
console.log(typeof obj);
//all of these variables can be console.logged at the same type by separating each variable with a comma. ex: console.log(typeof str, typeof num, typeof)


// Challenge 3:
// Make 2 variables.  The first is an array, the second is an object.  Inside each variable, store a string,
// a number, a boolean, an undefined, a null, an array, and an object.
// Once you've defined each variable, use console.log messages to output every value within your array and
// your object.

let newArr = ['string', 4, false, null, undefined, [1, 2, 3, 4], {name: 'Zach'}]
let newObj = {str: 'string', num: 4, bool: true, nul: null, undef: undefined, arr: [1, 2, 3, 4], obj: {name: 'tyler'}};

console.log(newArr[0], newArr[1], newArr[2], newArr[3], newArr[4], newArr[5], newArr[6])
console.log(newObj.str, newObj.num, newObj.bool, newObj.nul, newObj.undef, newObj.arr, newObj.obj);