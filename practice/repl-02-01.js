/*
repl.it 02.01-Loops with an Array

Using the array [1, 10, 8, 5, 7, 11], write a for loop that console.logs 'your number is even' if the number is even and 'your number is odd' if your number is odd.

Once you've solved this with a for loop, solve this with a for-of loop.

Finally, solve this challenge with a for-in loop.
*/

let arr = [1, 10, 8, 5, 7, 11];

//for loop

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log('your number is even.');
    } else { console.log('your number is odd.') }
}

console.log();

//for-of loop

for (item of arr){
    if (item % 2 === 0){
        console.log('your number is even');
    } else {console.log('your number is odd')}
}

console.log();

//for-in loop

for (num in arr){
    if (arr[num] % 2 === 0){
        console.log('your number is even');
    } else {
        console.log('your number is odd')
    }
}
