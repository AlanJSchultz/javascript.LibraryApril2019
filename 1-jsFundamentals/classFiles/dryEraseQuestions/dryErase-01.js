/*
1)  Write a function that takes 2 parameters (both parameters are numbers).
If the first number is greater than the second number, the function returns the sum of the numbers.
Else, it returns the subtraction.
*/

function twoNumbers(x,y) {
    if (x > y) {
        return (x + y)
    } else {
        return (x - y)
    }
}
console.log(twoNumbers(7,5));  // 12
console.log(twoNumbers(5,7));  // -2



/*
2)  Write a program which loops through the numbers 1-10,
adding each of those numbers to a variable initialized to 3.
It should console.log the result of the variable after the loop is done.
*/

let x = 3;
for (let i =1; i < 11; i++) {
    x = x + i
}
console.log(x);  // 58



/*
3) Write an object which has the following inside:  
it has a name property, which is a string.
It has a cost property, which is a decimal number.
It has a pattiesNum property, which is an integer.
It has a condiments property, which is an array of objects.
Each condiment object has two properties inside
--a name property, which is a string, and 
--a cost property, which is a decimal.
*/

let burgerJoint = {
    propertyName: 'Burgers-R-Us',
    propertyCost: 100000.00,
    pattiesNum: 25000,
    condiments: [{name: 'ketchupPacks', cost: 600.00},{name: 'mustardPacks', cost: 500.00},{name: 'mayoPacks', cost: 400.00}],
};
