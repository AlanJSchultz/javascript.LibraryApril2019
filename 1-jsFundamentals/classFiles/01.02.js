//arrays
let newArr = ['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbered elements. the numbers are index-es and the values
//are the elements
console.log(newArr[3]);
newArr[3].pickles = true
console.log(newArr[3]);
// newArr[3] = 'Zach is one bad dude with styling';
// console.log(newArr[3]);

//conditionals
let isRainy = false;
let isWarm = true;

if (isRainy == true){
    console.log('bring your umbrella');
} else {
    console.log('leave the umbrella home')
}

if (isWarm){
    console.log('wear shorts');
} else {
    console.log('wear a parka')
}

let gpas = [1.9, 3.5, 4.0, 2.8];
let singleGpa = gpas[1];

if (singleGpa == 4.0){
    console.log('wow! that is amazing')
} else if (singleGpa >= 3.0){
    console.log('that is a strong gpa');
}
 else {
    console.log('...eh, you might wanna hit the books');
}

/*
Challenge 1:
Write an array with at least 5 different numbers stored as
values in the array. Use if-elseIf statements to 
change one value of the array based upon the index number
passed to the conditional. Use the =, +=, /=,
%=, and **= operators to make the change of the array value
(only use one operator per condtional statement).
*/

let Oreo = [1, 2, 3, 4, 5];
let indexNum = 2

if (indexNum == 0) {
  Oreo [0] **= 5;
}  if (indexNum == 1) {
  Oreo [1] **= 5;
}  if (indexNum == 02) {
  Oreo [2] **= 5;
}  if (indexNum == 3) {
  Oreo [3] **= 5;
}  if (indexNum == 4) {
  Oreo [4] **= 5;
}
console.log(Oreo);

/*
Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.
*/

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

//use console.log to show the age of Legolas and the names of the characters
console.log(lotrObj.characters);
console.log(lotrObj.characters.charOne.age);

/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first);  ==>> undefined
console.log(second); ==>> error second is not defined
console.log(third);  ==>> error third is not defined
var first = 1;
let second = 2;
const third = 3;

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);  ==>> undefined
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);   ==>> second is not defined
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third); ==>> undefined, 2, 3
}
hoistTest();
*/

function hoistTest(){
    console.log(first, second, third);
    if (true){
      var first = 1;
      let second = 2;
      const third = 3;
    }
    console.log(first, second, third);
  }
  hoistTest();