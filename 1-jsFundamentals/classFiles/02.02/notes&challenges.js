let arr = [{key: 'academy'}, undefined, true, ['brie', 'rob', [true, false], undefined], 1150];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3][2][1]);

// arr[1] = 'whatever i want';

// console.log(arr[1]);

for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

/*
Challenge 1:
Build an array that has a string, a boolean, another array, an object, and a number inside.
Write a separate console.log to show every value within the array.
Once you've done that, use a for-of loop to console.log every value within the array.
If you can get the for-of loop to work correctly, try this with a .forEach.
*/

let ch1Arr = ['Eleven Fifty', true, ['tyler', 'zach'], {key: 'academy'}, 1150];
// console.log(ch1Arr[0]);
// console.log(ch1Arr[1]);
// console.log(ch1Arr[2]);
// console.log(ch1Arr[3]);
// console.log(ch1Arr[4]);

ch1Arr.forEach((val, whateverYouWant) => {console.log(val, whateverYouWant)})

//Solution
let arr = ['string', true, [1,2,3,4], {key: 'play'}, 1150];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
for (let placeholder of arr){
  console.log(placeholder);
}
arr.forEach((val, whateverYouWant) => {console.log(val, whateverYouWant)})


/*
Challenge 2:
Build an array with the values: 'swimming', 'running', 'yoga', 'biking', 'climbing'.  
Add the value 'stretching' with 'splice', but don't remove any contents in the array.
Add the value 'basketball' with 'splice', but *do* remove one element.
Finally, use 'slice' to cut and save a portion of your array to a separate variable.
Use console.logs between every 'splice' or 'slice' to confirm that your array is 
changing as you expect it to.
*/

let arrTwo = ['swimming', 'running', 'yoga', 'biking', 'climbing'];

// arrTwo.splice(0, 0, 'stretching');
// console.log(arrTwo);

arrTwo.splice(2, 1, 'basketball');
console.log(arrTwo);

let newArr = arrTwo.slice


/*
Challenge 3:
This challenge has 2 parts.  

First, create an object with 5 key-value pairs.  Using a Javascript feature 
demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
console.log every key in your keys array.
input: {key1: 'yeah!', key2: 1150, key3: true, key4: [1,2,3,4], key5: {innerKey: 'mind blown!'}}
output: key1, key2, key3, key4, key5

Once you've completed the above, use the .forEach method and your keys array to console.log all the values
in your object.  Show these values using [] notation but not using Object.values().
input: [key1, key2, key3, key4, key5]
output: 'yeah!', 1150, true, [1,2,3,4], {innerKey: 'mind blown!'}
*/

let obj = {
    key1: 'yeah!', 
    key2: 1150, 
    key3: true, 
    key4: [1,2,3,4], 
    key5: {innerKey: 'mind blown!'}
}

let keys = Object.keys(obj); //Object.keys gives us the names of the keys in an array ->
for (let val of keys){
    console.log(val);
}

console.log(obj);


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }

/////SOLUTIONS!!!!!!!!!!!!!!

/*
Array and Object challenges:
Challenge 1:
Build an array that has a string, a boolean, another array, an object, and a number inside.  Write a separate
console.log to show every value within the array.  Once you've done that, use a for-of loop to console.log
every value within the array.  If you can get the for-of loop to work correctly, try this with a .forEach.
*/

let arr = ['this is a string', false, ['football', 'basketball', 'soccer', 'baseball'], {breakfast: 'bacon and eggs', lunch: 'Ham & cheese sandwhich', dinner: 'bang bang shrimp pasta'}, 5];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

for (let i of arr) {
    console.log(i)
};

arr.forEach((value) => { // forEach method executes a provided function once for each array element
    console.log(value);
});

/*
Challenge 2:
Build an array with the values: 'swimming', 'running', 'yoga', 'biking', 'climbing'.  Add the value
'stretching' with 'splice', but don't remove any contents in the array.  Add the value 'basketball' with
'splice', but *do* remove one element.  Finally, use 'slice' to cut and save a portion of your array to 
a separate variable.  Use console.logs between every 'splice' or 'slice' to confirm that your array is 
changing as you expect it to.
*/

let arrTwo = ['swimming', 'running', 'yoga', 'climbing', 'biking'];

arrTwo.splice(5, 0, 'stretching'); // the first value in the splice method is the index we'd like to insert the new element at. The second value is the number of items to remove from the element. In this case it's none
console.log(arrTwo);

arrTwo.splice(2, 1, 'basketball');
// here we are accesing the second index, and removing one item.
console.log(arrTwo);

let newArr = arrTwo.slice(1, 4); // Slice returns a copy of a poriton of an array. Here we are referencing the first index, and making a copy of the elements up to but not including the fouth element. ELements indexed are 1, 2, 3.
console.log(newArr);

/*
Challenge 3:
This challenge has 2 parts.  First, create an object with 5 key-value pairs.  Using a Javascript feature 
demonstrated in your videos, create an array of all the keys in your object.  Use a for-of loop to
console.log every key in your keys array.
Once you've completed the above, use the .forEach method and your keys array to console.log all the values
in your object.  Show these values using [] notation but not using Object.values().
*/

let carObj = {
    make: 'Scion',
    model: 'XB',
    color: 'blue',
    wheels: 4,
    fast: false
};

let keys = Object.keys(carObj); // Object.keys returns an array of givens object own property names
console.log(keys);

for (let c of keys) {
    console.log(c);
};

keys.forEach((key) => {
    console.log(carObj[key]);
})

Object.keys(carObj).forEach((key) => {
    console.log(key); // The object key
    console.log(carObj[key]); // The object value
});

